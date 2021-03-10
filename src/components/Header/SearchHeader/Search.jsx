import style from './Search.module.css';
let SearchBar = () => {
    return (
      <div className={style.searchBar}>
          <input className={style.searchBar_searchField} type="search" alt="input" required />
          <button className={style.searchBar_searchStart}>Search</button>
      </div>
    );
}

export default SearchBar;