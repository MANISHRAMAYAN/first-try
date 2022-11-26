import { useEffect, useState } from "react"
import { useNavigate,Link } from "react-router-dom";
import { getAllEmployee } from "../../api/Api";
import { destroyStorage, getStorageData } from "../../constant/Constant";

export default function Dasboard(){
    
    const [name,setName]=useState({});

    const[employee,setEmployee]=useState([]);

   const naviget = useNavigate()

   useEffect(()=>{

   setName(getStorageData);

   getAllEmployee().then((res)=>{

    console.log(res);
    if(res.status === "success"){
        setEmployee(res.data)
        
    }
   })
   },[])
   function logout(){
    destroyStorage();
    naviget("/Login")
   }

    return(
        <>
        <button onClick={logout}>logout</button>
        <button ><a href="AddEmployee">AddEmployee</a></button>
        <div><a href="/Udate">update</a></div>
      <table border={1} >
        <thead>
            <tr>
                <td>S.no</td>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>phone</td>
                <td>Address</td>
                <td>Salary</td>               
                <td>update</td>               
                <td>Delete</td>               
            </tr>
        </thead>
        <tbody>
            {
                employee.map((data,i)=>
                    <tr key={i} >
                        <td>{i+1}</td>
                        <td>{data._id}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>{data.address}</td>
                        <td>{data.salary}</td>
                        <td><button><Link to={`/Update/${data._id}`}>update</Link></button></td>
                       <td><button><Link to={`/deleteEmployee/${data._id}`}>delete</Link></button></td>
                    </tr>
                )
}
        </tbody>
      </table>
       
       </>
    )
}