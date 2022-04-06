import React, { ChangeEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState(false);

  const link = buildLink();

  function buildLink() {
    let n = number.trim();
    n = n.replaceAll("-", "");
    return `https://wa.me/${n}`;
  }
  function validate(number: string) {
    if (number == null) {
      return false;
    }
    number = number.trim();

    if (number === "") {
      return false;
    }

    // const regex=/[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    const regex = /^[0-9]+[0-9,-]*$/;
    return regex.test(number);
  }
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    //e.preventDefault();
    setNumber(e.target.value);
    setIsValid(validate(e.target.value));
  }

  return (
    <div className="App">
      <div>
        <label htmlFor="phone">Enter your phone number:</label>

        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={onChange}
          value={number}
          required
        ></input>
      </div>
      <div>
        <a
          style={{
            pointerEvents: isValid ? "inherit" : "none",
            textDecoration: isValid ? "none" : "line-through",
          }}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {link}
        </a>
      </div>
    </div>
  );
}

export default App;
