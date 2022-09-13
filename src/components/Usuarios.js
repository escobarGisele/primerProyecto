import React, { useEffect, useState } from 'react'




const Usuarios = () => {

   
        const [usuarios,setUsuarios]= useState([]);
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data=> setUsuarios(data.results))
        },[])
 
  console.log(Usuarios);

  return (
    <div c>
      
      <div >
          <div >
              <div>
                  <div>
                      <table>
                          <thead>
                              <tr >
                                  <th >id</th>
                                  <th >Name</th>
                                  <th >Username</th>
                                  <th >Email</th>
                                  <th >Company Name</th>
                                  <th >Telephone</th>
                                  <th >City</th>
                              </tr>
                          </thead>
                          <tbody >
                          {Usuarios.map((user) => {
                            return(
                            <tr >
                            <td >{user.id}</td>
                            <td >{user.name}</td>
                            <td >{user.username}</td>
                            <td >{user.email}</td>
                            <td >{user.company.name}</td>
                            <td >{user.phone}</td>
                            <td >{user.address.city}</td>
                            </tr>
                            )
                          })}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Usuarios