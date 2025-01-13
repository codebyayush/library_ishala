import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./Filter";
import { addBookToCart } from "../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const allBooks = useSelector((state) => state.store.storeArr);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //this will add only new books 
  // which is not present in the cart
  const addBookHandler = (book) => {
    dispatch(addBookToCart(book));
    alert("Book Added Successfully");
  };


  return (
    <>
      <div className="bg-[#acacac] pt-32">
        <h1 className="pt-5 text-3xl text-stone-700 font-bold text-center screen-max-6:mt-28">
          Welcome to the Book Store
        </h1>
        <div className="flex gap-10 mt-10 screen-max-6:flex-col  ">
          <Filter />

          <div className="flex flex-wrap gap-10 justify-center w-3/4 screen-max-6:w-full">
            {allBooks.map((book) => (
              <div
                key={book.id}
                className="w-[300px] border-2 border-gray-300 rounded-lg shadow-md overflow-hidden p-4 h-fit bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={book.cover_image}
                  alt="cover_image"
                  className="w-full h-[350px] object-cover mb-4 rounded-md"
                />
                <div className="space-y-2">
                  <h1 className="text-xl font-semibold text-gray-800 truncate">
                    {book.title}
                  </h1>
                  <h2 className="text-lg text-gray-600">{book.author}</h2>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md hover:transition duration-300"
                    onClick={() => addBookHandler(book)}
                  >
                    Add Book
                  </button>
                  <button
                    className="bg-gray-500 hover:bg-stone-700 text-white py-2 px-2 shadow-md ml-2 rounded-lg hover:transition duration-300"
                    onClick={() => navigate(`/book/${book.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookList;

// description genre and year
