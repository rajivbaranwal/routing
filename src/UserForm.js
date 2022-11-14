import { useState } from "react";

function UserForm() {
  const [first_name, setFirstName] = useState("first name");
  const [last_name, setLastName] = useState(";ast name");

  const [data, setData] = useState({ first_name: "", last_name: "" });

  const handleChangeName = (event) => {
    // console.log("event", event);

    // console.log("event.target", event.target);

    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    console.log("event", event);

    console.log("event.target", event.target);

    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("first_name", first_name);
    console.log("last_name", last_name);
    console.log("data", data);
  };

  //   const handleChange = (event) => {
  //     setData({
  //       ...data,
  //       [event.target.name]: event.target.value,
  //     });
  //   };

  return (
    <form>
      <input name="first_name" value={first_name} onChange={handleChangeName} />
      <input
        name="last_name"
        value={last_name}
        onChange={handleChangeLastName}
      />

      {/* <input
        name="first_name"
        value={data.first_name}
        onChange={handleChange}
      />
      <input name="last_name" value={data.last_name} onChange={handleChange} /> */}
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default UserForm;
