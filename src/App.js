import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import MovieList from "./components/MovieList";
import OurMovieList from "./components/OurMovieList";
import DetailMovie from "./components/DetailMovie";

const KEY = "7d5c487c";

function App() {
  const [Query, setQuery] = useState("");
  const [movieItem, setMovieItem] = useState({});
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [detailTitle, setDetailTitle] = useState("");
  return (
    <div>
      <Header
        Query={Query}
        setQuery={setQuery}
        setIsOpenDetail={setIsOpenDetail}
      />
      <Main>
        <OurMovieList
          movieItem={movieItem}
          setIsOpenDetail={setIsOpenDetail}
          setDetailTitle={setDetailTitle}
        />
        {isOpenDetail ? (
          <DetailMovie KEY={KEY}
          detailTitle={detailTitle}  />
        ) : (
          <MovieList
            Query={Query}
            movieItem={movieItem}
            setMovieItem={setMovieItem}
            KEY={KEY}
          />
        )}
      </Main>
    </div>
  );
}
export default App;
