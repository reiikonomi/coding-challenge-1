import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Missing from "./pages/Missing";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { useStoreActions } from "easy-peasy";
import PostDetails from "./pages/PostDetails";

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const [query, setQuery] = useState(1)
  const [factLength, setFactLength] = useState(null)
  const [sliceStart, setSliceStart] = useState(0)
  const [sliceEnd, setSliceEnd] = useState(10)
  const { data, isLoading, fetchError } = useAxiosFetch(
    `https://catfact.ninja/facts?page=${query}`
  );

  

  useEffect(() => {
    setPosts(data.data);
    setFactLength(data.last_page)
    console.log(data.last_page);
    console.log(data.data);
    if(query === 10){
      setSliceStart(11)
      setSliceEnd(20)
    } else if (query === 20){
      setSliceStart(21)
      setSliceEnd(30)
    }else if (query === 30){
      setSliceStart(31)
      setSliceEnd(data.last_page)
    }
  }, [data, setPosts, query]);
  return ( 
    <div className="w-full h-screen justify-center items-center flex bg-slate-100 ">
    <div className="h-full flex flex-col md:w-3/5 fixed justify-center border-2 border-slate-400 dark:border-slate-800">
      <Header title="React Js Challenge" />
      <Nav />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home isLoading={isLoading} fetchError={fetchError} query={query} factLength={factLength}/>}
        />
        <Route exact path="/post/:id" element={<PostDetails/>}/>
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Missing />} />
      </Routes>
      <div className="dark:bg-slate-800 bg-slate-300 flex flex-row justify-center items-center">
 <button onClick={() => {
  setSliceStart(0)
  setSliceEnd(10)
 }} className="text-slate-800 dark:text-slate-300">Pages...</button>
{[...Array(factLength)].map((e, i) => <button key={i} className=" flex-row border-2 justify-center items-center dark:border-slate-900 dark:text-slate-300 border-slate-400 p-1 m-1" onClick={(e) => e.preventDefault(setQuery(i + 1))}>{`${i +1 } `}</button>).slice(sliceStart, sliceEnd)}

</div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
