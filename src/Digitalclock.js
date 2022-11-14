import { useState } from "react";
function Digitalclock() {
  // let time = new Date().toLocaleTimeString();
  // const [ctime, setCtime] = useState(time);
  const [ctime, setCtime] = useState();

  // const updateTime = () => {
  //   time = new Date().toLocaleTimeString();

  //   setCtime(time);
  // };

  // setInterval(updateTime, 1000);

  setInterval(() => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  });

  return (
    <>
      <h1>{ctime}</h1>
      {/* <button onClick={updatetime}>updatetime</button> */}
    </>
  );
}

export default Digitalclock;
