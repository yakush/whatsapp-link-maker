import React, { ChangeEvent, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import useAutoFocus from "./hooks/useAutoFocus";

// function cleanNumber(number:string){
//   number = number.trim();
//   const regex = /^[0-9]+[0-9-.]*$/;
//   regex.(number);
// }

function clean(number: string) {
  let cleanNumber = number.trim();
  cleanNumber = cleanNumber.replaceAll(" ", "");
  cleanNumber = cleanNumber.replaceAll("-", "");
  cleanNumber = cleanNumber.replaceAll(/[a-z]/g, "");
  if (cleanNumber.startsWith("0")) {
    cleanNumber = "972" + cleanNumber.substring(1);
  }
  return cleanNumber;
}

function buildLink(number: string) {
  const cleanNumber = clean(number);
  return `https://wa.me/${cleanNumber}`;
}

function validate(number: string) {
  if (number == null) {
    return false;
  }
  const cleanNumber = clean(number);
  return !!cleanNumber && cleanNumber !== "";
}

function App() {
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const refAutoFocus = useAutoFocus();

  const cleanNumber = clean(number);
  const link = buildLink(number);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    //e.preventDefault();
    setNumber(e.target.value);
    setIsValid(validate(e.target.value));
  }

  return (
    <div className="App">
      <div>
        <label htmlFor="phone">Enter phone number:</label> <br />
        <input
          ref={refAutoFocus}
          type="tel"
          id="phone"
          name="phone"
          onChange={onChange}
          value={number}
          required
          autoFocus={true}
          autoComplete="off"
        ></input>
      </div>
      {/* <div className="output">{cleanNumber || "---"}</div> */}
      <div>
        <Button disabled={!isValid} href={link}>
          {link}
        </Button>
      </div>
    </div>
  );
}

export default App;
