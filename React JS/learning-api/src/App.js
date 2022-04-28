import React, { useState } from "react";
import "./App.css";

import Display from "./components/Display/Display";
import Button from "./components/Buttons/Button";

const buttons = [
  "<",
  "&",
  "&",
  ">",
  "U",
  "L",
  "R",
  "D",
  "1",
  "2",
  "3",
  "0",
  "4",
  "5",
  "6",
  "*",
  "7",
  "8",
  "9",
  "#",
];

const App = () => {
  const [info, setInfo] = useState("");

  return (
    <div className="main-container">
      <Display />
      <div className="button-container">
        {buttons.map((text) => {
          return <Button text={text} />;
        })}
      </div>
    </div>
  );
};

export default App;
