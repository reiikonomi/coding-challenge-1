import Feed from "../components/Feed";
import { useStoreState } from "easy-peasy";

const Home = ({ isLoading, fetchError }) => {
  const searchResults = useStoreState((state) => state.searchResults);

  return (
    <main className="h-4/5 overflow-auto w-full bg-slate-200 dark:bg-slate-700 dark:text-slate-300 p-5 text-2xl text-slate-500">
      {isLoading && <p className="w-full">Loading facts...</p>}
      {!isLoading && fetchError && (
        <p className="" style={{ color: "red" }}>
          {fetchError}
        </p> 
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <div>
<Feed posts={searchResults}/>
          </div>
          
        ) : (
          <p className="h-4/5 w-full bg-slate-200 dark:bg-slate-700 dark:text-slate-300 p-5 text-2xl text-slate-500">No facts to display.</p>
        ))}
    </main>
  );
};

export default Home;
