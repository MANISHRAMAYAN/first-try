import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signup } from "../api/Api";

export default function Singup(){
    
    const[form,setForm]=useState();

    const naviget=useNavigate();


  async  function handleSubmit(event){
         event.preventDefault();
        const response =await signup(form);
              console.log(response);

    if(response.status==="success"){
           toast("signup succesfuylly")
          naviget("/Login")
    }
    else{
        toast.error("error")
    }
    }

    function handleChange(event){
    setForm({...form,[event.target.name]:event.target.value})
    }



    return(
        <>
        <h1>Singup form</h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange}></input><br></br>
            <input type="email" name="email" onChange={handleChange}></input><br></br>
            <input type="number" name="phone" onChange={handleChange}></input><br></br>
            <input type="password" name="password" onChange={handleChange}></input><br></br>
            <input type="submit"  value="submit"></input><br></br>
        </form>
        <div><a href="login">login</a></div>
        </>
    )
}