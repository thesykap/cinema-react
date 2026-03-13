import { useEffect, useState } from "react";
import MovieElement from "./MovieElement";
import Button from "./Button";

function OurMovieList({movieItem, setIsOpenDetail, setDetailTitle}) {
  const [ourMovie, setOurMovie] = useState([]);

  useEffect(function(){
    if (Object.keys(movieItem).length !== 0 && ourMovie.every(movie =>movie.imdbID !== movieItem.imdbID))setOurMovie([...ourMovie, movieItem])
  }, [movieItem])

  function handleDeleteMovie(index){
      setOurMovie(ourMovie.filter((movie, i, arr ) =>movie.imdbID !== arr[index].imdbID));
      setIsOpenDetail(false);
  }

  function handleDetailMovie(index){
    const {Title} = ourMovie[index];
    setDetailTitle(Title);
    setIsOpenDetail(true);
  }

  return (
    <ul className="list-movies">
      {ourMovie?.map((movie,i) => (
          <li style={{display : "flex", gap : "20px" ,width : "100%", borderBottom : "2px solid #fff"}}>  
             <MovieElement movie={movie} i={i} key={movie.imdbID} />
             <Button handleEvent={handleDeleteMovie} i={i}>Delete</Button>
             <Button handleEvent={handleDetailMovie} i={i}>Details</Button>
          </li>
      ))}
    </ul>
  );
}
export default OurMovieList;