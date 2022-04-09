import React from 'react'
import {Table} from "react-bootstrap"
function TableData() {

const user = [
    {name:"satyendra Singh", email:"satyendrasinghsss7398@gmail.com",phone:"8948543408"},
    {name:"Anurag Singh", email:"satyendrasinghsss7398@gmail.com",phone:"8948543408"},
    {name:"Pratima Singh", email:"pratima@gmail.com",phone:"8954129858"},
]

  return (
    <>
 <h1>Table </h1>

 <Table striped variant='dark'>
     <tbody>
     <tr border="1" key={45}>
         <td>Name</td>
         <td>Email</td>
         <td>phone</td>
     </tr>
{
    user.map((user,index)=>
       
            <tr border="1"  key={index}>
            <td >{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
        </tr>
     
    )
}
</tbody>
</Table>
    </>
  )
}

export default TableData