import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import ResultCard from "../../Components/ResultCard";
import UpdateNote from "../../Components/UpdateNote/UpdateNote";
import Del from "../../Components/UpdateNote/Del";
import "./Dashboard.css";
import toast from "react-hot-toast";
import * as services from "../../Services/noteServices";

function Dashboard() {
  const [notes, setNotes] = useState("");
  const [isOpen, setOpenModal] = useState(false);
  const [note, setNote] = useState("");
  const [isDel, setisDel] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState({});
  const [submitNotes, setSubmitNotes] = useState(false);
  const [del, setDel] = useState("");

  const openDelModal = (id) => {
    setisDel(true);
    setSelected(id);
  };

  console.log(selected);

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

  // Function to fetch notes

  const getNotes = async () => {
    try {
      let response = await services.getNotes();
      toast.success(response?.message);
      setNotes(response?.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  // Get notes on component mount

  useEffect(() => {
    getNotes();
  }, []);

  // Function to create note

  const saveNote = async () => {
    if (note === "") {
      setError("the input box cannot be empty");
      return;
    }
    try {
      let response = await services.createNote(note);
      toast.success(response?.message);
      getNotes();
      setNote("");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  // const delNote = async () => {
  //   setNotes("");
  //   try {
  //     response = await services.deleteNote(id);
  //     toast.success(res.message);
  //     setNote("");
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //   }
  // };

  const delNote = async () => {
    try {
      let response = await services.deleteNote(selected);
      toast.success(response?.message);
      getNotes();
      closeDelModal();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  let userData = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="App">
      <Header />
      <h2>Welcome {userData?.username}</h2>
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
                selected={selected}
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
          ariaHideApp={false}
          delNote={delNote}
          // deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default Dashboard;
