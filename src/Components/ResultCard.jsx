import Edit from "../icons/Edit";
import Delete from "../icons/Delete";

function ResultCard(props) {
  return (
    <div className="Hero-bottom">
      <button className="btn-jo">JO</button>
      <small className="name">{props.name}</small>
      <p className="note">{props.note}</p>
      <div className="delete-update-btn">
        {/* <button className="delete">Delete</button> */}
        <Delete />
        <Edit />
      </div>
    </div>
  );
}

export default ResultCard;
