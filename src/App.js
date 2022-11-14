import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Bulb from "./Bulb";
import Counter from "./Counter";
import Digitalclock from "./Digitalclock";
import Stopwatch from "./Stopwatch";
import Test from "./Test";
import UserForm from "./UserForm";
import Users from "./Users";
import List from "./List";
import Form from "./Form";
import Form1 from "./Form1";
import Form3 from "./Form3";
import FormDetails from "./FormDetails";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/bulb" element={<Bulb />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/useform" element={<UserForm />}></Route>
          <Route path="/stopwatch" element={<Stopwatch />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/digitalclock" element={<Digitalclock />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="form1" element={<Form1 />}></Route>
          <Route path="form3" element={<Form3 />}></Route>
          <Route path="formdetails" element={<FormDetails />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Users /> */}
      {/* <Counter /> */}
      {/* <Stopwatch /> */}
      {/* <UserForm /> */}
      {/* <Test /> */}
      {/* <Bulb /> */}
      {/* <Digitalclock /> */}
    </div>
  );
}

export default App;
