import { useEffect, useState } from "react";
import SvgEtoile from "./SvgEtoile";

function DetailMovie({ KEY , detailTitle}) {
  const [detail, setDetail] = useState({});
  const [rating, setRating] = useState(0)
  useEffect(
    function () {
      async function fetchData() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&t=${detailTitle}`,
        );
        const data = await res.json();
        setDetail(data);
      }
      fetchData();
    },
    [KEY, detailTitle],
  );
  console.log(detail);
  return (
    <div className="detailsMovie">
      <div className="movieImage">
        <div>
          <img src={detail.Poster} alt={detail.Title} />
        </div>
        <div>
          <h2>Rating of the movie : {detail.Title}</h2>
          <div className="etoile">
            {Array.from({length : 5}, (_, i) => <SvgEtoile indexStar = {i} onRating = {setRating} rating = {rating} />)}
          </div>
          {rating === 0 
          ? <p>You need to rate this movie by clicking in stars </p> 
          : <p> You rated this movie {rating} stars, this gives to the movie score : {rating}/5 </p>}
        </div>
      </div>

      <h2>
        Casting: <span>{detail.Actors}</span>{" "}
      </h2>
      <h2>
        Award: <span>{detail.Awards}</span>{" "}
      </h2>
      <h2>
        BoxOffice: <span>{detail.BoxOffice}</span>{" "}
      </h2>
      <h2>
        Country: <span>{detail.Country}</span>{" "}
      </h2>
      <h2>
        Genre: <span>{detail.Genre}</span>{" "}
      </h2>
      <h2>Synopsis:</h2>
      <p> {detail.Plot}</p>
    </div>
  );
}

export default DetailMovie;
