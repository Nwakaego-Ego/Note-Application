import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import ResultCard from "../../Components/ResultCard";
import UpdateNote from "../../Components/UpdateNote/UpdateNote";
import Del from "../../Components/UpdateNote/Del";
import "./Dashboard.css";
import axios from "axios";

function Dashboard() {
  const [notes, setNotes] = useState("");
  const [isOpen, setOpenModal] = useState(false);
  const [note, setNote] = useState("");
  const [isDel, setisDel] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState({});

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
    setNotes([...notes, { id: notes.length + 1, name: "Jibola", note: note }]);
    setError("");
    setNote("");
  };

  const delNotes = () => {
    setNotes("");
  };

  const delNote = () => {
    let newNotes = notes.filter((el) => el.id !== selected);
    setNotes(newNotes);
    closeDelModal();
  };

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  };

  const fetchData2 = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData2();
  }, []);

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
                setSelected={setSelected}
              />
            </div>
          );
        })
      )}
      <div>
        <UpdateNote modalOpen={isOpen} closeModal={closeModal} />
        <Del
          closeDelModal={closeDelModal}
          isDel={isDel}
          delNotes={delNotes}
          delNote={delNote}
        />
      </div>
    </div>
  );
}

export default Dashboard;