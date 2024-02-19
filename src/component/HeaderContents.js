import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utility/firebase";
import {
  Ask_GPT,
  Home,
  NETFLIX_LOGO_CDN_URL,
  supportedLanguages,
} from "../utility/constants";
import { useNavigate } from "react-router-dom";
import { browseGpt, changeLanguage } from "../utility/configSlice";

const HeaderContents = () => {
  const user = useSelector((state) => state.user);
  const gpt = useSelector((state) => state.config.isGpt);
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const signoutHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  const updateToggler = () => {
    if (gpt === Ask_GPT) {
      dispatcher(browseGpt(Home));
    } else {
      dispatcher(browseGpt(Ask_GPT));
    }
    navigate("/browse");
  };

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
          {gpt === Home && (
            <select
              className="h-fit p-1 my-auto mr-2 text-white bg-black px-3 border-[1px] rounded-md"
              onClick={(e) => {
                dispatcher(changeLanguage(e.target.value));
              }}
            >
              {supportedLanguages.map((language) => {
                return <option key={language.code}>{language.lang}</option>;
              })}
            </select>
          )}
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
            {gpt}
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
