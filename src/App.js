
import Header from "./components/Header";
import Main from "./components/Main";
import MovieList from "./components/MovieList";
import OurMovieList from "./components/OurMovieList";
import DetailMovie from "./components/DetailMovie";
import { useReducer } from "react";

const KEY = "7d5c487c";

const initialState= {
  query : "",
  movieItem : {},
  isOpenDetail : false,
  detailTitle : "",
}

function reducer(state, action){
  switch (action.type){
    case "setQuery" :
      return{
        ...state,
        query : action.payload,
      }
    case "setMovieItem" :
      return{
        ...state,
        movieItem : action.payload,
      }
    case "setIsOpenDetail" :
      return{
        ...state,
        isOpenDetail : action.payload,
      }
    case "setDetailTitle" :
      return{
        ...state,
        detailTitle : action.payload,
      }
    default : throw new Error("error");
    
  }
}

function App() {
  //const [query, setQuery] = useState("");
  const[state, dispatch] = useReducer(reducer, initialState);
  const{query, movieItem, isOpenDetail,detailTitle} = state;
  //const [movieItem, setMovieItem] = useState({});
  //const [isOpenDetail, setIsOpenDetail] = useState(false);
  //const [detailTitle, setDetailTitle] = useState("");
  return (
    <div>
      <Header
        query={query}
        dispatch={dispatch}
      />
      <Main>
        <OurMovieList
          movieItem={movieItem}
          dispatch={dispatch}
          //setDetailTitle={setDetailTitle}
        />
        {isOpenDetail ? (
          <DetailMovie KEY={KEY}
          detailTitle={detailTitle} 
        />
        ) : (
          <MovieList
            query={query}
            movieItem={movieItem}
            dispatch={dispatch}
            KEY={KEY}
          />
        )}
      </Main>
    </div>
  );
}
export default App;
