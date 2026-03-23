function Header({query, dispatch}) {

  function handleDetailMovie(e){
     e.preventDefault();
     dispatch({type : "setIsOpenDetail", payload : false})
     //setIsOpenDetail(false);
  }

  function handleQueryChange(e){
    e.preventDefault();
    dispatch({type : "setQuery", payload: e.target.value})
  }
  return (
    <header className="container-header">
      <div>
        <h1>
          Movies challenge<span>🎬</span>
        </h1>
      </div>
      <div className="search">
        <label htmlFor="search">Search : </label>
        <input id="search" placeholder="Type here to search a movie" type="text" value={query} onChange={handleQueryChange} onFocus = {handleDetailMovie}></input>
      </div>
    </header>
  );
}
export default Header;
