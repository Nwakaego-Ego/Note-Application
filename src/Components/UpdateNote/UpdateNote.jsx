import Modal from "react-modal";

const UpdateNote = (props) => {
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Edit Note</h3>
          <button
            onClick={() => {
              props.closeModal();
            }}
          >
            {" "}
            X{" "}
          </button>
        </div>

        <div className="mid-section">
          <textarea type="text" id="name" className="input-text" />
          <div className="mid-section-bottom">
            <p>0/300</p>
            <button className="btn-save">Update</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateNote;
