
import "./login.css";
import verified from "./LoginImages/verified.png"
export const Verified = () => {

    return (
        <div className="verified">

            <div className="verified-main">

                <img src={verified} alt="verifiedimg" />
                
                <h3>New to Myntra ?</h3>
                <button>CREATE NEW ACCOUNT</button>
            </div>
          
        </div>
    )
};
