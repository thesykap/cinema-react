import { useEffect, useState } from "react";
import MovieElement from "./MovieElement";
import Button from "./Button";

function MovieList({query,movieItem,dispatch, KEY}) {
 
  const [movies, setMovies] = useState([]);

  useEffect(function(){
    async function fetchData(){
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
        const data = await res.json();
        setMovies(data.Search);
    }
    fetchData();
  },[query])

  function handleAddMovie(index){
    const{Title,Poster,Year, imdbID, Type} = movies[index];
    dispatch({type: "setMovieItem", payload : {...movieItem, Title,Poster,Year, imdbID, Type}})
  }
  return (
    <ul className="list-movies">{movies?.map((movie, i) =>
       <li style={{display : "flex", gap : "20px" ,width : "100%", borderBottom : "2px solid #fff"}}>  
          <MovieElement movie={movie} i={i} key={movie.imdbID} />
          <Button handleEvent={handleAddMovie} i={i}>Add</Button>
      
    </li>
      )}
    </ul>
  );
}
export default MovieList;
