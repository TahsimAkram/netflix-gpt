import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies.nowPlayingMovies);
  const randomIndex = Math.floor(Math.random() * 10);
  if(movies ==null) return;

  const selectedMovie = movies[randomIndex];
  const {title,overview,id} = selectedMovie;
  console.log("title:"+title);
  console.log("id:"+id);
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground id={id}/>
    </div>
  );
};

export default MainContainer;
