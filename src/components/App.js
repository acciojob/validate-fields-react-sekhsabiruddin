import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [error, setError] = useState("");
  const [text, setText] = useState({
    Username: "",
    Password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setText((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleLogin() {
    if (text.Username === "" || text.Password === "") {
      setError("Both username and password are required.");
    } else {
      setError("");
    }
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <label>Username</label>
      <input
        type="text"
        name="Username"
        value={text.Username}
        onChange={handleChange}
      />
      <br />
      <br />
      <label>Password</label>
      <input
        type="password"
        name="Password"
        value={text.Password}
        onChange={handleChange}
      />
      <br />
      {error && <div id="errorMessage">{error}</div>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default App;
