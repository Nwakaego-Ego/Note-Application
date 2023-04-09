import React, { useState } from "react";
import Header from "../../Components/Header";
import ResultCard from "../../Components/ResultCard";
import UpdateNote from "../../Components/UpdateNote/UpdateNote";
import Del from "../../Components/UpdateNote/Del";
import "./Dashboard.css";

function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [isOpen, setOpenModal] = useState(false);
  const [note, setNote] = useState("");
  const [isDel, setisDel] = useState(false);
  const [error, setError] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const openDelModal = () => {
    setisDel(true);
  };

  const closeDelModal = () => {
    setisDel(false);
  };

  const openModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const saveNote = () => {
    if (note === "") {
      setError("the input box cannot be empty");
      return;
    }
    setNotes([...notes, { id: Math.random, name: "Jibola", note: note }]);
    setError("");
  };

  return (
    <div className="App">
      <Header />
      <div className="mid-section">
        <textarea
          type="text"
          id="name"
          value={note}
          className="input-text"
          onChange={handleChange}
          maxLength={500}
        />
        <p className="error-message">{error ? error : ""}</p>
        <div className="mid-section-bottom">
          <p>{note.length}/500</p>
          <button className="btn-save" onClick={saveNote}>
            save
          </button>
        </div>
      </div>

      {notes.length < 1 ? (
        <div>Please add a note</div>
      ) : (
        notes.map((data) => {
          return (
            <div key={data.id}>
              <ResultCard
                {...data}
                openModal={openModal}
                openDelModal={openDelModal}
              />
              ;
            </div>
          );
        })
      )}
      <div>
        <UpdateNote modalOpen={isOpen} closeModal={closeModal} />
        <Del closeDelModal={closeDelModal} isDel={isDel} />
      </div>
    </div>
  );
}

export default Dashboard;
