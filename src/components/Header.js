import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import useWindowSize from "../hooks/useWindowSize";
import Toggle from "./Toggle"

const Header = ({ title }) => {
  const { width } = useWindowSize();
  return (
    
    <header className="bg-slate-400 w-full h-1/5 flex flex-row justify-between dark:bg-slate-800 ">
      <h1 className="text-slate-800 font-bold text-2xl flex pl-3 dark:text-slate-400 justify-center items-center">{title}</h1>

      <div className="flex flex-row justify-center items-center">
      {width < 768   ? (
        <FaMobileAlt className="text-black text-2xl dark:text-white"/>
      ) : width < 992 ? (
        <FaTabletAlt className="text-black text-2xl dark:text-white"/>
      ) : (
        <FaLaptop className="text-black text-2xl dark:text-white"/>
      )}
    <Toggle/>
    </div>
    </header>
  );
};

export default Header;
