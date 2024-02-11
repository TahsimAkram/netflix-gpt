import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO_CDN_URL } from "../utility/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utility/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utility/userSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const signoutHandler = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
         const{uid,displayName,email,photoURL} = user;
         dispatcher(addUser({uid:uid,displayName:displayName,email:email,photoURL:photoURL}));
         navigate("/browse");
        } else {
        dispatcher(removeUser());
        navigate("/");
      }
    });

    //Will be called when the componenet will unmount
    return ()=> unsubscribe();
  },[]);

  return (
    <div className={`flex justify-between z-20 bg-gradient-to-b from-black ${user?'w-full absolute':''}`}>
      <img
        className="w-36 ml-20"
        src={NETFLIX_LOGO_CDN_URL}
        alt="netflix_logo"
      />
      {user && user.photoURL && <div className="flex flex-wrap mr-10 justify-between">
        <img className="w-8 h-8 mt-5 mr-5 rounded-md" src={user.photoURL} alt="user avatar" /> 
         <button className="bg-red-600 px-3 h-8 mt-5 text-white rounded-md" onClick={signoutHandler}>Sign Out</button>
      </div>}
    </div>
  );
};

export default Header;
