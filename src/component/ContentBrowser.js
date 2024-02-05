import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utility/firebase";

const ContentBrowser = ()=>{
    const navigate = useNavigate();
    const signoutHandler = ()=>{
        signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
            // An error happened.
          });
    }

    return(
        <div className="flex justify-between">
        <h1>Logged successfully</h1>
        <button onClick={signoutHandler}>Sign Out</button>
        </div>
    );
}

export default ContentBrowser;