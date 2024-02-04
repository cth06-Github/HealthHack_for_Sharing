from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
#import numpy as np

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["POST", "GET"])
def upload_file():
    try:
        # Retrieve the uploaded file
        uploaded_file = request.files["file"]

        ## PROCESSING the file ##
        df = pd.read_csv(uploaded_file)
        #data = df.to_numpy()
        columns = df.columns.to_list()
        #df = pd.DataFrame(data, columns=columns)

        # Create the desired dictionary structure
        department_dict = {}

        for _, row in df.iterrows():
            department = row[str(columns[0])]
            year = row[str(columns[1])]
            quarter = row[str(columns[2])]
            waste = row[str(columns[3])]
            goods = row[str(columns[4])]

            if department not in department_dict:
                department_dict[department] = {
                    str(columns[1]): [],
                    str(columns[2]): [],
                    str(columns[3]): [],
                    str(columns[4]): []
                }

            if pd.notna(year):
                department_dict[department][str(columns[1])].append((year))
            if pd.notna(quarter):
                department_dict[department][str(columns[2])].append(quarter)
            if pd.notna(waste):
                department_dict[department][str(columns[3])].append((waste))
            if pd.notna(goods):
                department_dict[department][str(columns[4])].append((goods))

        # Print the result_dict
        #print(department_dict["ABC"])

        json_list = {}
        department_list = list(department_dict.keys())
        for departments in department_list:
            json_list[departments] = {} #definitely 
            curr_d = department_dict[departments]
            for key in list(curr_d.keys()):
                if key.lower() != "year" and key.lower() != "quarter":
                    json_list[departments][f"{key}_latestImprovement"] = curr_d[key][-2] - curr_d[key][-1]
                    json_list[departments][f"{key}_latestAbs"] = curr_d[key][-1]
        print(json_list)

        uploaded_file.save("uploaded_file.csv")

        return jsonify({"message": "File uploaded and processed successfully", "data": json_list})
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    app.run(host = "http://127.0.0.1:5000/", debug=True)