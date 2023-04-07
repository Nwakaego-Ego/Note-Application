import Modal from "react-modal";

const Delete = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <Modal
        isOpen={props.isDel}
        onRequestClose={props.closeDelModal}
        style={customStyles}
      >
        <div>
          <h3>Are you sure you want to delete this note</h3>
        </div>

        <div className="mid-section del-btn">
          <button className="btn-save no-del">No, go back</button>
          <button
            className="btn-save yes-del"
            onClick={() => {
              props.isDel;
            }}
          >
            Yes, delete note
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Delete;

// style={{ display: "flex", justifyContent: "space-between" }}
