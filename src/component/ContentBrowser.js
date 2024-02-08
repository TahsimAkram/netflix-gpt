import Header from "./Header";
import useNowPlayingMovies from "../utility/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryConatainer from "./SecondaryConatainer";

const ContentBrowser = ()=>{
  useNowPlayingMovies();
    
    return(
        <div>
          <Header/>
          <MainContainer/>
          <SecondaryConatainer/>
        </div>
    );
}

export default ContentBrowser;