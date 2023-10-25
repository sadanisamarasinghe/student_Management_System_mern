import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateStudent() {
  const { studentId } = useParams();
  const [state, setState] = useState({
    name: "",
    address: "",
    tp: "",
    email: "",
    age: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, address, tp, email, age } = state;

    try {
      const response = await axios.put(`http://localhost:8000/stModel/update/${studentId}`, {
        name,
        address,
        tp,
        email,
        age,
      });

      setState({
        name: "",
        address: "",
        tp: "",
        email: "",
        age: "",
        message: "Student updated successfully",
      });
    } catch (error) {
      console.error(error);
      setState({ ...state, message: "Error updating student" });
    }
  };

  return (
    <div>
      <h2>Update Student</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={state.address}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>TP:</label>
          <input
            type="text"
            name="tp"
            value={state.tp}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={state.age}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <button type="submit" name="Update">
            Update Student
          </button>
        </div>
      </form>
      <p>{state.message}</p>
    </div>
  );
}

export default UpdateStudent;
