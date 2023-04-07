import React, { useState } from "react";
import Header from "../../Components/Header";
import ResultCard from "../../Components/ResultCard";
import UpdateNote from "../../Components/UpdateNote/UpdateNote";
import Del from "../../Components/UpdateNote/Del";

function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [isOpen, setOpenModal] = useState(false);
  const [note, setNote] = useState("");
  const [isDel, setisDel] = useState(false);

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
    setNotes([...notes, { id: Math.random, name: "Jibola", note: note }]);
  };

  return (
    <div className="App">
      <Header />
      <div className="mid-section">
        <textarea
          type="text"
          id="name"
          className="input-text"
          onChange={handleChange}
        />
        <div className="mid-section-bottom">
          <p>1/300</p>
          <button className="btn-save" onClick={saveNote}>
            save
          </button>
        </div>
      </div>

      {notes.map((data) => {
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
      })}
      <div>
        <UpdateNote modalOpen={isOpen} closeModal={closeModal} />
        <Del closeDelModal={closeDelModal} isDel={isDel} />
      </div>
    </div>
  );
}

export default Dashboard;
