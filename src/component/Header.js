import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utility/firebase";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utility/userSlice";
import HeaderContents from "./HeaderContents";
import { cleanMoviesList } from "../utility/moviesSlice";
import { resetconfig } from "../utility/configSlice";

const Header = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
         const{uid,displayName,email,photoURL} = user;
         dispatcher(addUser({uid:uid,displayName:displayName,email:email,photoURL:photoURL}));
         navigate("/browse");
         
        } else {
        dispatcher(removeUser());
        dispatcher(cleanMoviesList());
        dispatcher(resetconfig());
        navigate("/");
      }
    });

    //Will be called when the componenet will unmount
    return ()=> unsubscribe();
  },[]);

  return (
    <HeaderContents/>
  );
};

export default Header;
