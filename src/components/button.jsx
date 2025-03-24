import React from "react";
//import { useState } from "react";

const Button = () => {
//const [click, setClick] = useState([]);
  const text = "Add Task";
  return (
    <button className="bg-blue-400 rounded-md p-2 w-full hover:bg-blue-500 my-2">
      {text}
    </button>
  );
};

export { Button };
