import React, { useState } from "react";
import Header from "../../Components/Header";
import ResultCard from "../../Components/ResultCard";
import { data } from "../../data";

function Dashboard() {
  const [note, setNote] = useState(data);
  return (
    <div className="App">
      <Header />
      <div className="mid-section">
        <textarea type="text" id="name" className="input-text" />
        <div className="mid-section-bottom">
          <p>1/300</p>
          <button className="btn-save">save</button>
        </div>
      </div>

      {note.map((data) => {
        return (
          <div key={data.id}>
            <ResultCard {...data} />;
          </div>
        );
      })}
    </div>
  );
}

export default Dashboard;
