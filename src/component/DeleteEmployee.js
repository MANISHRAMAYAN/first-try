import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { deleteEmployee, loadUser } from "../api/Api";
export default function DeleteEmployee(){
    const parm=useParams();
   const naviget = useNavigate();

    console.log(parm);
    const[form,setForm]=useState();


    useEffect(()=>{
      loadUser(parm.id).then((response)=>{
         if(response.status =="success"){
              setForm(response.data)}
})

},[])


  async  function handleclick(event){
    event.preventDefault();
    const response = await deleteEmployee(parm.id, form);
    
        if (response.status == 'success') {       
            naviget("/Dasboard")
        }

    }
    function handlecancelclick(){
        if(true){
            naviget("/Dasboard")
        }
    }
    return(
        <>
        <h1>delete page</h1>
        <button  onClick={handleclick} >confirm</button>
        <button  onClick={handlecancelclick} >cancel</button>
        </>
    )
}