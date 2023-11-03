import React, { useEffect, useRef, useState } from "react";
import axios from 'axios'

function CRUD() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=> {
      // console.log(response.data);
      setUser(response.data);
    })
    .catch((error)=> {
      console.log(error);
    })

  },[])

  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const addUser = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users',
    {name:name, email:email})
    .then((response)=> {
      setUser([...user,  response.data ]);
      setName("");
      setEmail("");
    })
  };
  const editUser = (index) => {
    const edit = user[index];
    setName([edit.name]);
    setEmail([edit.email]);
    setEditIndex(index);
  };

  const updateUser = (e) => {
    e.preventDefault();
    
    if (
      editIndex !== null &&
      // name.trim() !== "" && 
      // email.trim() !== ""
      typeof name !== "undefined" &&
      name !== null &&
      typeof email !== "undefined" &&
      email !== null
    ) {
      const updatedUsers = [...user];
      updatedUsers[editIndex] = { name: name, email: email };
      console.log(updatedUsers);
      setUser(updatedUsers);
      setName("");
      setEmail("");
      setEditIndex(null);
    }
  };

  const deleteUser = (index) => {
    const updatedUser = [...user];
    updatedUser.splice(index, 1);
    setUser(updatedUser);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          ref={inputRef}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {editIndex !== null ? (
          <button onClick={updateUser}>Update</button>
        ) : (
          <button onClick={addUser}>Add</button>
        )}
      </form>
      <div>
        {user.map((users, index) => (
          <ul key={index}>
            <li>
              <h4>Name : {users.name}</h4>
              <h4>Email : {users.email}</h4>
              <button onClick={() => editUser(index)}>Edit</button>
              <button onClick={() => deleteUser(index)}>Delete</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default CRUD;
