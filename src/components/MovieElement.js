

function MovieElement({movie, i}){
  return(
    <>
        <div>
         <img
           src={movie.Poster} alt={movie.Title} />
        </div>
        <div>
          <h3 style={{margin : "0px"}}> {movie.Title} </h3>
          <p> Year of release : {movie.Year}</p>
          <p>Type : {movie.Type}</p>
        </div>
    </>
  )
}

export default MovieElement;
