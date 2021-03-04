import React, { useState, useEffect } from "react";
import {Table} from "react-bootstrap";

const Users = () => {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");

  const fetchData = async () => {
     try{
 const resp = await fetch("http://jsonplaceholder.typicode.com/users");
    const respData = await resp.json();

    setData(respData);
    localStorage.setItem("users",JSON.stringify(respData));
    setMode("online")
     }catch(error){
       let collection = localStorage.getItem("users");
       setData(JSON.parse(collection));
       setMode("offline");
   
     }
   
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
 
 <div>
  {mode === "offline" && <div className="alert alert-warning" role="alert">You are in offline mode some issue with connection!</div>}
<Table striped bordered hover >
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>

    
    {data.map((item)=>(

    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.address.suite}</td>
    </tr>
    ))}
  </tbody>
</Table>
 </div>
  );
};

export default Users;
