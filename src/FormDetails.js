import { useLocation } from "react-router-dom";
import User from "./User";

function FormDetails() {
  let location = useLocation(); //for get data
  // console.log(location);

  return (
    <>
      <div>
        <li>{location.state.username}</li>
        <li>{location.state.email}</li>
        <li>{location.state.phoneno}</li>
        <li>{location.state.password}</li>
        <h2>user component k through data</h2>
        <User userData={location.state} />
      </div>
    </>
  );
}

export default FormDetails;
