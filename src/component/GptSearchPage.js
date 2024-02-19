import React from "react";
import {
  NETFLIX_BG_CDN_URL,
} from "../utility/constants";
import { useSelector } from "react-redux";
import languageConstants from "../utility/languageConstants";
import Header from "./Header";

export const GptSearchPage = () => {
  const selectedLanguage = useSelector(state=>state.config.lang);
  const language = selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)
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
          placeholder={languageConstants[language].inputField}
          name="searchbox"
        />
        <button className="bg-red-600 w-1/5 rounded-md text-white text-lg">
          {languageConstants[language].searchButton}
        </button>
      </div>
    </div>
  );
};
