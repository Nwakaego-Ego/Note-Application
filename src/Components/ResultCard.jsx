import Edit from "../icons/Edit";
import Delete from "../icons/Delete";
import Dashboard from "../Pages/Dashboard/Dashboard";

function ResultCard(props) {
  return (
    <div className="Hero-bottom">
      <button className="btn-jo">JO</button>
      <small className="name">{props.name}</small>
      <p className="note">{props.note}</p>
      <div className="delete-update-btn">
        <button
          onClick={() => {
            props.openDelModal(props._id);
          }}
          className="remove-btn-style"
        >
          <Delete />
        </button>
        <button className="remove-btn-style" onClick={props.openModal}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default ResultCard;
