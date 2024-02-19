import Header from "./Header";
import useNowPlayingMovies from "../utility/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryConatainer from "./SecondaryConatainer";
import { useSelector } from "react-redux";
import { Ask_GPT } from "../utility/constants";
import { GptSearchPage } from "./GptSearchPage";
import Skeleton from "./Skeleton";

const BrowseContent = () => {
  useNowPlayingMovies();
  const movies = useSelector((state) => state.movies.nowPlayingMovies);
  const isGptSearch = useSelector((state) => state.config.isGpt);
  if(movies == null){
  return (
    <Skeleton/>
  );

  }
  return (
    <div>
      {isGptSearch === Ask_GPT ? (
        <>
          <Header />
          <MainContainer />
          <SecondaryConatainer />
        </>
      ) : (
        <GptSearchPage />
      )}
    </div>
  );
};

export default BrowseContent;
