import { useEffect } from "react";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utility/firebase";
import { addUser, removeUser } from "../utility/userSlice";

const Body = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
         const{uid,displayName,email} = user;
         dispatcher(addUser({uid:uid,displayName:displayName,email:email}));
         navigate("/browse");
      } else {
        dispatcher(removeUser());
        navigate("/");
      }
    });
  },[]);

  return (
    <div>
        <Login/>
    </div>
  );
};


export default Body;
