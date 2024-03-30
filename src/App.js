import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validateInputs = () => {
    const regExEmail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const regExSpecialChar = /[^A-Za-z0-9]/;
    const regExNumber = /[0-9]/;

    let errorMessage = "";

    if (!regExEmail.test(email)) {
      errorMessage = "Email is not Valid";
    } else if (password.length < 10) {
      errorMessage = "Password must be at least 10 characters long";
    } else if (!regExSpecialChar.test(password)) {
      errorMessage = "Password must contain at least one special character";
    } else if (!regExNumber.test(password)) {
      errorMessage = "Password must contain at least one number";
    } else {
      errorMessage = "Log-in Successfully!";
    }

    setMessage(errorMessage);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>AUTHENTICATION FORM</h1>
      </div>
      <div className="card">
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          id="email"
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password" className="label">
          Password:
        </label>
        <input
          id="password"
          className="input"
          type="password"
          placeholder="Password (min 10 characters, at least 1 special character, and 1 number)"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="button" onClick={validateInputs}>Check</button>
        <p className="message">{message}</p>
      </div>

    </div>
  );
}

export default App;
