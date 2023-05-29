import { useNavigate } from "react-router";
import "./Header.css";

function Header(props) {
  const navigate = useNavigate();

  const signinPage = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="navbar">
      <h3 className="diary">Diary</h3>
      <div className="navbtn">
        <button className="signout" onClick={signinPage}>
          Sign Out
        </button>
        <button className="btn-jo">JO</button>
      </div>
    </div>
  );
}

export default Header;
