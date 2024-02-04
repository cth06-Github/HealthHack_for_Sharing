import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import Button from '../components/Button'; 
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useData } from '../components/DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import dashboardDemo from "../images/dashboardDemo.png";


const Admin = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      // Update the state with the selected file
      setSelectedFile(event.target.files[0]);
    };
  
    const handleUpload = () => {
      // Implement the logic to send the file to the server (Flask)
      const formData = new FormData();
      
      formData.append("file", selectedFile);
  
      fetch("http://127.0.0.1:5000/", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("File uploaded successfully:", data);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });

    };

    //const dataa = handleUpload();

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
                        <input type="file" accept=".csv" onChange={handleFileChange} />
                        </div>
                        <div>
                        <button onClick={handleUpload}>Upload</button>
                        </div>
                        <div>
                        </div>
                        <br></br>
                    <br></br>
                    <br></br>
                    
                </div>  
            </div>

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
