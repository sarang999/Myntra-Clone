import "./login.css";
import verified from "./LoginImages/verified.png";
import { Link } from "react-router-dom";

export const Verified = () => {
  return (
    <div className="verified">
      <div className="verified-main">
        <img src={verified} alt="verifiedimg" />

        <h3>New to Myntra ?</h3>
        <Link to="/signupform">
          <button className="create-signup">CREATE NEW ACCOUNT</button>
        </Link>
      </div>
    </div>
  );
};
