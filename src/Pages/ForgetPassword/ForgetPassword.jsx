import { useNavigate } from "react-router";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const signinPage = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="navbar">
        <h3>Diary</h3>
        <div className="navbtn">
          <button className="signout" onClick={signinPage}>
            Sign in
          </button>
          <button className="btn-jo">JO</button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
