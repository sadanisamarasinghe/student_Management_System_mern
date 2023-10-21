import React, { useState } from "react";
import axios from 'axios';

function Home() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [tp, setTp] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/stModel/add', {
        name,
        address,
        tp,
        email,
        age,
      });

      console.log(response.data);
      setName('');
      setAddress('');
      setTp('');
      setEmail('');
      setAge('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>TP:</label>
          <input
            type="text"
            value={tp}
            onChange={(e) => setTp(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            className="form-input block"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <button type="submit">Add student</button>
        </div>
      </form>
    </div>
  );
}

export default Home;
