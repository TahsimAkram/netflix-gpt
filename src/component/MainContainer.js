import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import VideoDetailTitle from "./VideoDetailTitle";

const MainContainer = ({selectedMovie}) => {
  debugger;
  const {title,overview,id} = selectedMovie;
  const movieId = useSelector(state=>state.movies.movieId);
  const extractDuration = (runtime)=>{
    const hour = runtime / 60 ;
    const minute = runtime % 60;
    return `${hour.toFixed(0)}h ${minute}m`
  }

  const extractYear = (date)=>{
    return date?.substring(0,4);
  } 

  const extractAgeRating = (ageFlag)=>{
    let ageRating;
    if(!ageFlag){
      ageRating = "U/A 16+";
    }else{
      ageRating = "A 18+";
    }
    return ageRating;
  }

  const supportedLanguages =`${selectedMovie?.spoken_languages?.length} ${selectedMovie?.spoken_languages?.length > 1 ? 'Languages':'Language'}`;
  const extractGenre = (genre)=>{
    const genreNames = genre?.map(eachGenre=>(eachGenre.name));
    return genreNames
  }

  return (
    <div className="relative -mt-[5%]">
      {movieId ? <VideoDetailTitle languages={supportedLanguages} genre={extractGenre(selectedMovie?.genres)} 
      duration={extractDuration(selectedMovie?.runtime)} year={extractYear(selectedMovie?.release_date)} 
      ageRating={extractAgeRating(selectedMovie?.adult)} id={id} overview={overview}/>
      :<VideoTitle title={title} overview={overview} />}
      <VideoBackground id={id}/>
    </div>
  );
};

export default MainContainer;
