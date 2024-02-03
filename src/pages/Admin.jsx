import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import Button from '../components/Button'; 
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useData } from '../components/DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import dashboardDemo from "../images/dashboardDemo.png";


const Admin = () => {
  let selectedFile;

  const handleFileChange = (event) => {
    selectedFile = event.target.files[0];
  };

  const handleConvertClick = () => {
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = function (event) {
        const data = event.target.result;

        const workbook = XLSX.read(data, { type: 'binary' });
        workbook.SheetNames.forEach((sheet) => {
          const rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
          const jsonObject = JSON.stringify(rowObject);
          document.getElementById('jsonData').innerHTML = jsonObject;
          console.log(jsonObject);
        });
      };

      fileReader.readAsBinaryString(selectedFile);
    }
  };

  const { inputValue, setInput } = useData();

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    // You can perform any additional logic here before setting the input
    setInput(inputValue);
  };

  const clearInput = () => {
    setInput('');
  };

  
  return (
    <div className = "adminEqual">
        <div className = "adminSubRow">
            <div className = "boxSide">
                <div className = "boxWithin">
                    <div>
                        <h2 style={{fontSize: 25}}>Upload data</h2>
                    </div> 
                    <br></br>
                    <br></br>
                        <div>
                            <input type="file" id="fileUpload" accept=".xls,.xlsx" onChange={handleFileChange} /><br />
                        </div>
                        <div>
                            <button type="button" id="uploadExcel" onClick={handleConvertClick}>Convert</button>
                        </div>
                        <br></br>
                    <br></br>
                    <br></br>
                    
                </div>  
            </div>
            <pre id="jsonData"></pre>

            <div className = "boxSide">
                <div className = "boxWithin">
                    <div>
                        <h2>Weekly Challenge to Post</h2>
                    </div>
                    <div>
                        <textarea style={{ height: '100px', width: '300px' }} type="text" value={inputValue} onChange={handleInputChange} />
                    </div>
                    <div>
                        <div className ="iconSide">
                            <div>
                                <button onClick={handleSubmit}>Post</button>
                            </div>

                            <div>
                                <button onClick={clearInput}>
                                    <FontAwesomeIcon icon={faTrash} /> {/* Dustbin icon */}
                                </button>
                            </div>
                        </div>
                    </div>




                    </div>
            </div>
        </div>

        <div className="footer">
            <Link to="/">
                <Button>Logout</Button>
            </Link>

            <Link to="/Dashboard">
            <Button>Dashboard</Button>
            </Link>

            <Link to="/Board">
            <Button>Leaderboard</Button>
            </Link>
        </div>

    </div>
  );
};

export default Admin;
