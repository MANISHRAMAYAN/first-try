import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { loadUser, updateEmployee } from "../api/Api";
export default function Update(){
    const param=useParams();
    
    const navigate= useNavigate();
    const[form, setForm] =useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        salary:"", 
    });


    useEffect(() => {
        loadUser(param.id).then((response) => {
            console.log(response)
            if (response.status == "success") {
                setForm(response.data)
            }
        })
    }, []);




   async function handleSubmit(event){
        event.preventDefault();
        console.log(form);
        const response = await updateEmployee(param.id, form)
        if (response.status == 'success') {
                navigate("/Dasboard")
        }

    }
    function handleChange(event){
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    return(
        <>
       
         <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={form.name} onChange={handleChange}></input><br></br>
            <input type="email" name="email" value={form.email} onChange={handleChange}></input><br></br>
            <input type="phone" name="phone" value={form.phone} onChange={handleChange}></input><br></br>
            <input type="text" name="address" value={form.address} onChange={handleChange}></input><br></br>
            <input type="number" name="salary" value={form.salary} onChange={handleChange}></input><br></br>    
            <input type="submit"  value="update"></input><br></br>
        </form>
        </>
    )
}