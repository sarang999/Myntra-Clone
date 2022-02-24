
import "./login.css";
import verified from "./LoginImages/verified.png"
export const Verified = () => {

    return (
        <div className="verified">

            <div className="verified-main">

                <img src={verified} alt="verifiedimg" />
                <h3>Already have an account ?</h3>

                <button>LOGIN WITH USERNAME</button>
                 
                <div className="verified-line">
                    <div><hr/></div>
                    <div>OR</div>
                    <div><hr/></div>
                </div>
                <h3>New to Myntra ?</h3>
                <button>CREATE NEW ACCOUNT</button>
            </div>
          
        </div>
    )
};
