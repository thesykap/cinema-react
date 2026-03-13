function Header({Query, setQuery , setIsOpenDetail}) {

  function handleDetailMovie(e){
     e.preventDefault();
     setIsOpenDetail(false);
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
        <input id="search" placeholder="Type here to search a movie" type="text" value={Query} onChange={(e) => setQuery(e.target.value)} onFocus = {handleDetailMovie}></input>
      </div>
    </header>
  );
}
export default Header;
