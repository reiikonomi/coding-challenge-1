import { createContext, useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const history = useNavigate();

  const { data, isLoading, fetchError } = useAxiosFetch(
    "https://catfact.ninja/"
  );

  useEffect(() => {
    setPosts(data.data);
    console.log(data.data);
  }, [data]);

  useEffect(() => {
    setSearchResults(posts);
  }, [posts, search]);

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        fetchError,
        isLoading,
        posts,
        setPosts,
        history,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
