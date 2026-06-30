import React, { useState } from "react";

const Hudini = () => {
  const [show, setShow] = useState(false);

  const changeShow = () => {
    let flag = !show;
    setShow(flag);
  };

  return (
    <div>
      {show ? "Now you see me" : "Now you don't"}
      <button onClick={changeShow}>Change Show</button>
    </div>
  );
};

export default Hudini;
