import React, { useState, useEffect } from "react";
import axios from 'axios';

function Details(){
    const [students, setStudents] = useState([]);

    useEffect(() => {
        //function to fetch data from the API
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/stModel/'); //replace with your API URL
                setStudents(response.data);
            }
            catch (error){
                console.error(error);
            }
        };

        //call the fechData function 
        fetchData();
    }, []);

    return(
        <div>
            <h1>View Details of Student</h1>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>TP</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                
                <tbody>
                    {students.map((student) => (
                            <tr key={student._id}>
                            <td>{student.name}</td>
                            <td>{student.address}</td>
                            <td>{student.tp}</td>
                            <td>{student.email}</td>
                            <td>{student.age}</td>
                            <td><button><a href="/update">update</a></button></td>
                        </tr>
                    ))}
                     </tbody>
                </table>
        </div>
    );
}
export default Details;