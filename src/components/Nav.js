import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

const Nav = () => {
  const posts = useStoreState((state) => state.posts);
  const setSearchResults = useStoreActions(
    (actions) => actions.setSearchResults
  );

  useEffect(() => {
    setSearchResults( posts);
  }, [posts, setSearchResults]);
  return (
    <nav className="flex flex-row justify-between items-center p-3 bg-slate-300 dark:bg-slate-600">
      
        <div className="text-lg text-slate-800 dark:text-slate-300">
          <Link to="/">Home</Link>
        </div>
        <div className="text-lg text-slate-800 dark:text-slate-300">
          <Link to="/about">About</Link>
        </div>
   
    </nav>
  );
};

export default Nav;
