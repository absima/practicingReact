function SivakToWatchList() {
  const movies = [{ title: 'Film 1', img: 'url' }, { title: 'Film 2' }, { title: 'Film 3' }];
  const movieList = movies.map((item) => <li>{item}</li>)
  return (
    <div className="to_watch">
      <h3>My Favorite Watch List</h3>
      <ol>{movieList}</ol>
    </div>
  );
}

export default SivakToWatchList;