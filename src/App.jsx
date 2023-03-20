import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="navbar">
        <h3>Diary</h3>
        <div className="navbtn">
          <button className="signout">Sign out</button>
          <button className="btn-jo">JO</button>
        </div>
      </div>
      <div className="mid-section">
        <input type="text" id="name" className="input-text" />
        <div class="mid-section-bottom">
          <p>1/300</p>
          <button class="btn-save">save</button>
        </div>
      </div>
      <div className="bottom">
        <button className="btn-jo">JO</button>
        <small className="name">Jibola Orija</small>
        <p className="note">I am tired, I really need a vacation</p>
        <div className="delete-update-btn">
          <button className="delete">Delete</button>
          <button className="update">Update</button>
        </div>
      </div>
    </div>
  );
}

export default App;
