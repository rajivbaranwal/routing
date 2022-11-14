import { useEffect, useState } from "react";
import User from "./User";

function Form1() {
  const [inputChange, setInputChange] = useState({});

  const [input, setInput] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange1 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
    // console.log(input);
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    const newInput = { ...input, id: new Date().getTime().toString() };
    setInputChange([...inputChange, newInput]);
    //set local storage value
    localStorage.setItem("formdata", JSON.stringify(input));
    console.log(newInput);
  };

  //get local storage value
  //   useEffect(() => {
  //     let formdata1 = localStorage.getItem("formdata");
  //     if (formdata1) {
  //       setInput(JSON.parse(formdata1));
  //     }
  //   }, []);

  return (
    <>
      <User userData={{ username: "fkfdkdk" }} />
      <form onSubmit={handleSubmit1}>
        Name
        <input
          type="text"
          name="username"
          value={input.username}
          onChange={handleChange1}
        />
        <br />
        Email
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange1}
        />
        <br />
        Phone Number
        <input
          type="number"
          name="phone"
          value={input.phone}
          onChange={handleChange1}
        />
        <br />
        Password
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange1}
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default Form1;
