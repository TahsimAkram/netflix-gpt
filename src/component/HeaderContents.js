import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../utility/firebase";
import { Ask_GPT, Home, NETFLIX_LOGO_CDN_URL, supportedLanguages } from "../utility/constants";
import { useNavigate } from "react-router-dom";

const HeaderContents = () => {
    const user = useSelector((state) => state.user);
    const [pageToggler, setPageToggler] = useState(Ask_GPT);
    const navigate = useNavigate();
    const signoutHandler = () => {
        signOut(auth)
          .then(() => {
          })
          .catch((error) => {
            // An error happened.
          });
      };
    const updateToggler = ()=>{
      debugger;
      if(pageToggler===Ask_GPT){
        setPageToggler(Home);
        navigate("/search");
      }else{
        setPageToggler(Ask_GPT);
        navigate("/browse");
      }

    }
  return (
    <div
      className={`relative flex justify-between z-20 bg-gradient-to-b from-black ${
        user ? "w-full absolute" : ""
      }`}
    >
      <img
        className="w-48 ml-36"
        src={NETFLIX_LOGO_CDN_URL}
        alt="netflix_logo"
      />
      {user && user.photoURL && (
        <div className="flex flex-wrap mr-10 justify-between">
        {pageToggler === Home && <select className="h-fit p-1 my-auto mr-2" onClick={() => {}}>
          {supportedLanguages.map((language) => {
            return <option>{language.lang}</option>;
          })}
        </select>}
          <img
            className="w-8 h-8 my-auto mr-2 rounded-md"
            src={user.photoURL}
            alt="user avatar"
          />
          {/* <h1 className="text-white h-8 mt-6 ">{user.displayName}</h1> */}
          <button
            className="bg-red-600 px-3 h-8 my-auto mr-2 text-white rounded-md"
            onClick={updateToggler}
          >
            {pageToggler}
          </button>
          <button
            className="bg-red-600 px-3 h-8 my-auto  text-white rounded-md"
            onClick={signoutHandler}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default HeaderContents;
