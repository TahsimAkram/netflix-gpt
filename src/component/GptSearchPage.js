import React from "react";
import {
  NETFLIX_BG_CDN_URL,
  NETFLIX_LOGO_CDN_URL,
  supportedLanguages,
} from "../utility/constants";
import { useSelector } from "react-redux";
import HeaderContents from "./HeaderContents";

export const GptSearchPage = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <img
        className="bg-center h-full w-full bg-cover absolute z-0"
        src={NETFLIX_BG_CDN_URL}
        alt="netflix_bg"
      />
      {/* <HeaderContents/> */}
      {/* <div className="relative flex justify-end top-5 right-10">
        <select  onClick={() => {}}>
          {supportedLanguages.map((language) => {
            return <option>{language.lang}</option>;
          })}
        </select>
      </div> */}
      <HeaderContents/>
      <div className="relative w-1/2 mx-auto flex top-36">
        <input
          className="w-3/4 px-3 py-3 rounded-md mr-4 "
          type="text"
          placeholder="what would you like to watch today?"
          name="searchbox"
        />
        <button className="bg-red-600 w-1/5 rounded-md text-white text-lg">
          Search
        </button>
      </div>
    </div>
  );
};
