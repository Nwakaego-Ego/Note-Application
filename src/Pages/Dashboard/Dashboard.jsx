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
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const openDelModal = (id) => {
    setisDel(true);
    setSelected(id);
  };

  // console.log(selected);

  const closeDelModal = () => {
    setisDel(false);
  };

  const openModal = (id) => {
    setOpenModal(true);
    let singleNote = notes.filter((item) => item._id === id);
    setFiltered(singleNote);
    console.log(singleNote);
  };

  const closeModal = () => {
    setOpenModal(false);
    setFiltered([]);
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
    if (searchText === "") {
      getNotes();
    }
  }, [searchText]);

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
      toast.error(error?.response?.data?.message);
    }
  };

  //  Function to delete Resultcard

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

  // Function for search

  const searchNote = async () => {
    try {
      setLoading(true);
      let response = await services.search(searchText);
      toast.success(response?.message);
      setNotes(response?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  // const delUserData = () => {
  //   setUserData("");
  //   console.log(userData);
  // };
  // console.log(userData);

  let userData = JSON.parse(localStorage.getItem("user"));
  // console.log(userData);

  return (
    <div className="App">
      <Header userData={userData} />
      <h2 className="username">Welcome {userData?.username}</h2>

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

      <input
        type="text"
        id="text"
        name="text"
        className="search-box"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search Note Here"
      />
      <button onClick={() => searchNote()} disabled={loading}>
        {loading ? "Searching" : "Search"}
      </button>

      {notes.length < 1 ? (
        <div className="please-add-note">Please add note</div>
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
        <UpdateNote
          modalOpen={isOpen}
          closeModal={closeModal}
          filtered={filtered}
          getNotes={getNotes}
        />
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
