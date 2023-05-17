import React, { useState } from "react";
import Modal from "react-modal";
import toast from "react-hot-toast";
import * as services from "../../Services/noteServices";
import "./UpdateNote.css";

const UpdateNote = (props) => {
  const [single, setSingle] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSingle(e.target.value);
  };

  // Function to update note

  const updateUserNote = async () => {
    try {
      setLoading(true);
      let response = await services.updateNote(single, props?.filtered[0]?._id);
      props.getNotes();
      props.closeModal();
      toast.success(response?.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: "600px",
    },
  };

  return (
    <div>
      <Modal
        isOpen={props.modalOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
      >
        <div className="update-exit-frame">
          <h3 className="update-edit-note">Edit Note</h3>
          <button
            className="update-exit-edit-note"
            onClick={() => {
              props.closeModal();
            }}
          >
            {" "}
            Exit Note{" "}
          </button>
        </div>

        <div className="mid-section">
          <textarea
            type="text"
            id="name"
            defaultValue={props?.filtered[0]?.note}
            className="input-text"
            onChange={handleChange}
          />
          <div className="mid-section-bottom">
            <p>0/300</p>
            <button
              className="btn-save"
              onClick={() => {
                updateUserNote();
              }}
            >
              {loading ? "Loading" : "Update"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateNote;
