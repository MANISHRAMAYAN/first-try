import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/Api";
import { setTokenData } from "../constant/Constant";

export default function Login(){
    const[form,setForm]=useState()
    const naviget=useNavigate()



    async function handleSubmit(event){
        event.preventDefault();
            const response = await login(form);
            console.log(response);
            if(response.status==="success"){
                setTokenData(response)
                naviget("/Dasboard")
            }
            else{
                console.log("error");
            }

    }
    function handleChange(event){
      setForm({...form,[event.target.name]:event.target.value})
    }

   
    return(
    <>
    <h1>login form </h1>
    
    <form onSubmit={handleSubmit}>
        <input type="email" name="email" onChange={handleChange}></input><br></br>
        <input type="password" name="password" onChange={handleChange}></input><br></br>
        <input type="submit"></input>


    </form>
    
   <div><a href="/">Singup</a></div>
    
    </>)
}