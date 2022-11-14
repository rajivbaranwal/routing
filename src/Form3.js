import { useState } from "react";

function Form3() {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const [submitData, setSubmitData] = useState({});

  const loginChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    console.log("value loginChange", value);
    console.log("inputData loginChange", inputData);
    setInputData({ ...inputData, [name]: value });
    console.log(inputData);
  };
  console.log(inputData, "loginchange bahar ");

  const submitForm = (e) => {
    e.preventDefault();
    const newInput1 = { ...inputData };
    setSubmitData(newInput1);
    // console.log(submitData);
    console.log(newInput1);
  };
  console.log("submitData", submitData);
  return (
    <>
      <form onSubmit={submitForm}>
        email
        <input
          name="email"
          type="email"
          value={inputData.email}
          onChange={loginChange}
        />
        <br />
        Password
        <input
          name="passwords"
          type="password"
          value={inputData.passwords}
          onChange={loginChange}
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default Form3;
