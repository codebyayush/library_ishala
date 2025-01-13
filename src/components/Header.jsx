import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterBySearch } from "../store/slices/storeSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const searchHandler = (e) => {
    setText(e.target.value);
    
  };

  // this will make sure everytime the text changes the books will be filtered
  useEffect(() => {
    dispatch(filterBySearch(text));
  }, [text]);
  

  return (
    <>
      <div className=" p-5 bg-[#acacac] fixed w-full">
        <div className="flex gap-10 justify-evenly screen-max-6:flex-col screen-max-6:gap-4">
          <h1
            className="font-bold text-4xl text-stone-700 cursor-pointer"
            onClick={() => navigate("/")}
          >
            LIBRARY
          </h1>

          <input
            type="text"
            placeholder="Search"
            className="p-2 border-2  rounded-xl outline-blue-400 w-1/3 min-w-[150px] screen-max-6:w-full shadow-lg"
            value={text}
            onChange={searchHandler}
          />
          <button
            className="p-3 broder-2 bg-stone-300 rounded-xl hover:text-white hover:bg-stone-500 pl-10 pr-10 font-medium shadow-lg hover:transition duration-300 screen-max-6:w-[200px]"
            onClick={() => navigate("/addBook")}
          >
            Add Your Book
          </button>
          <button
            className="p-3 broder-2 bg-blue-300 rounded-xl hover:text-white hover:bg-blue-500 pl-10 pr-10 font-medium shadow-lg hover:transition duration-300 screen-max-6:w-[100px]"
            onClick={() => navigate("/cart")}
          >
            Browse Books
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
