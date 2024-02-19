import React from "react";
import {
  NETFLIX_BG_CDN_URL,
} from "../utility/constants";
import HeaderContents from "./HeaderContents";
import { useSelector } from "react-redux";
import languageConstants from "../utility/languageConstants";
import Header from "./Header";

export const GptSearchPage = () => {
  const selectedLanguage = useSelector(state=>state.config.lang);
  return (
    <div>
      <img
        className="bg-center h-full w-full bg-cover absolute z-0"
        src={NETFLIX_BG_CDN_URL}
        alt="netflix_bg"
      />
      <Header/>
      <div className="relative w-1/2 mx-auto flex top-36">
        <input
          className="w-3/4 px-3 py-3 rounded-md mr-4 "
          type="text"
          placeholder={languageConstants[selectedLanguage].inputField}
          name="searchbox"
        />
        <button className="bg-red-600 w-1/5 rounded-md text-white text-lg">
          {languageConstants[selectedLanguage].searchButton}
        </button>
      </div>
    </div>
  );
};
