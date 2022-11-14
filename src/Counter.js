import { useState } from "react";

function Counter() {
  const [data, setData] = useState(0);

  const inc = () => {
    setData(data + 1);
  };

  const dec = () => {
    setData(data - 1);
  };

  return (
    <>
      <button onClick={inc}>+</button>
      <p>{data}</p>
      <button onClick={dec}>-</button>
    </>
  );
}

export default Counter;
