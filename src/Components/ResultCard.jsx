import Edit from "../icons/Edit";
import Delete from "../icons/Delete";

function ResultCard(props) {
  // console.log(props);
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
        <button
          className="remove-btn-style"
          onClick={() => {
            props.openModal(props._id);
          }}
        >
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default ResultCard;
