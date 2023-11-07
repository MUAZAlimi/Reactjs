import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

const Nav = () => {
  const posts = useStoreState((state) => state.posts)
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Post</label>

        <input
          type="text"
          id="search"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/post">Post</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        {/* <li>
          <NavLink to="/missing">m</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
