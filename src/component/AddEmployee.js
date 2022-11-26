import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../api/Api";

export default function AddEmployee() {
  const naviget = useNavigate();
  const [form, setForm] = useState({
    name: "",
    salary: "",
    phone: "",
    address: "",
    email: "",
  });
  async function handleSubmit(event) {
    event.preventDefault();

    const response = await addEmployee(form);
    console.log(response);
    if(response.status=="success"){
        naviget("/Dasboard")
    }
  }
//   const { name, salary, phone, address, email } = form;

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(event.target.value);
  }

  return (
    <>
      <h1>added pages </h1>
      <form onSubmit={handleSubmit}>
        <label>NAME: </label>
        <input type="text" name="name" onChange={handleChange}></input>
        <br></br>
        <label>SALARY: </label>
        <input type="number" name="salary" onChange={handleChange}></input>
        <br></br>
        <label>PHONE: </label>
        <input type="number" name="phone" onChange={handleChange}></input>
        <br></br>
        <label>Address: </label>
        <input type="text" name="address" onChange={handleChange}></input>
        <br></br>
        <label>EMAIL: </label>
        <input type="email" name="email" onChange={handleChange}></input>
        <br></br>
        <input type="submit"></input>
        <br></br>
      </form>
    </>
  );
}
