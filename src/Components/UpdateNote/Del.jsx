import Modal from "react-modal";
import "./Del.css";

const Delete = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      background: "c3dddc",
      color: "white",
    },
  };

  return (
    <div className="del-main-box">
      <Modal
        isOpen={props.isDel}
        onRequestClose={props.closeDelModal}
        style={customStyles}
      >
        <div className="del-main">
          <div>
            <h3>Are you sure you want to delete this note</h3>
          </div>

          <div className="mid-section del-btn">
            <button
              className="btn-save no-del"
              onClick={() => {
                props.closeDelModal();
              }}
            >
              No, go back
            </button>
            <button
              className="btn-save yes-del"
              onClick={() => {
                props.delNote();
              }}
            >
              Delete note
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Delete;

// style={{ display: "flex", justifyContent: "space-between" }}
