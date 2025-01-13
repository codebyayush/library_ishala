import React from "react";
import { useDispatch } from "react-redux";
import { filterByGenre } from "../store/slices/storeSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log("genres clicked--", e.target.value);

    dispatch(filterByGenre(e.target.value));
  };

  return (
    <>
      <div className="w-1/4 screen-max-6:h-[300px] screen-max-6:m-auto ml-12 screen-max-9:w-2/3 screen-max-6:w-full p-8 pt-3 bg-[#5e5e5e]  max-h-[800px] overflow-y-scroll mb-10 rounded-lg shadow-md">
        <h1 className="text-center text-2xl font-extrabold text-white mb-6">
          Filter
        </h1>
        <h1 className="font-medium text-xl hover:underline cursor-pointer mt-5 text-white mb-4">
          Genres
        </h1>
        <ul className="flex flex-col gap-4 text-white">
          <li className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
            <label htmlFor="all-genres" className="text-lg">
              All
            </label>
            <input
              type="radio"
              className="h-5 w-5 ml-4 mt-1"
              name="genre"
              id="all-genres"
              value=""
              onChange={handleChange}
            />
          </li>
          <li className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
            <label htmlFor="fantasy" className="text-lg">
              Fantasy
            </label>
            <input
              type="radio"
              className="h-5 w-5 ml-4 mt-1"
              name="genre"
              id="fantasy"
              value="Fantasy"
              onChange={handleChange}
            />
          </li>
          <li className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
            <label htmlFor="science-fiction" className="text-lg">
              Science Fiction
            </label>
            <input
              type="radio"
              className="h-5 w-5 ml-4 mt-1"
              name="genre"
              id="science-fiction"
              value="Science Fiction"
              onChange={handleChange}
            />
          </li>
          <li className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
            <label htmlFor="mystery" className="text-lg">
              Mystery
            </label>
            <input
              type="radio"
              name="genre"
              id="mystery"
              className="h-5 w-5 ml-4 mt-1"
              value="Mystery"
              onChange={handleChange}
            />
          </li>
          <li className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
            <label htmlFor="romance" className="text-lg">
              Romance
            </label>
            <input
              type="radio"
              name="genre"
              id="romance"
              className="h-5 w-5 ml-4 mt-1"
              value="Romance"
              onChange={handleChange}
            />
          </li>
          <li className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
            <label htmlFor="historical-fiction" className="text-lg">
              Historical Fiction
            </label>
            <input
              type="radio"
              name="genre"
              id="historical-fiction"
              className="h-5 w-5 ml-4 mt-1"
              value="Historical Fiction"
              onChange={handleChange}
            />
          </li>
          <li className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
            <label htmlFor="horror" className="text-lg">
              Horror
            </label>
            <input
              type="radio"
              name="genre"
              id="horror"
              className="h-5 w-5 ml-4 mt-1"
              value="Horror"
              onChange={handleChange}
            />
          </li>
          <li className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
            <label htmlFor="adventure" className="text-lg">
              Adventure
            </label>
            <input
              type="radio"
              name="genre"
              id="adventure"
              className="h-5 w-5 ml-4 mt-1"
              value="Adventure"
              onChange={handleChange}
            />
          </li>
          <li className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
            <label htmlFor="dystopian" className="text-lg">
              Dystopian
            </label>
            <input
              type="radio"
              name="genre"
              id="dystopian"
              className="h-5 w-5 ml-4 mt-1"
              value="Dystopian"
              onChange={handleChange}
            />
          </li>
          <li className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
            <label htmlFor="magical-realism" className="text-lg">
              Magical Realism
            </label>
            <input
              type="radio"
              name="genre"
              id="magical-realism"
              className="h-5 w-5 ml-4 mt-1"
              value="Magical Realism"
              onChange={handleChange}
            />
          </li>

          <li className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
            <label htmlFor="poetry" className="text-lg">
              Poetry
            </label>
            <input
              type="radio"
              name="genre"
              id="poetry"
              className="h-5 w-5 ml-4 mt-1"
              value="Poetry"
              onChange={handleChange}
            />
          </li>

          <li className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
            <label htmlFor="coming-of-age" className="text-lg">
              Coming of age
            </label>
            <input
              type="radio"
              name="genre"
              id="coming-of-age"
              className="h-5 w-5 ml-4 mt-1"
              value="coming-of-age"
              onChange={handleChange}
            />
          </li>
          <li className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
            <label htmlFor="children" className="text-lg">
              Children's Literature
            </label>
            <input
              type="radio"
              name="genre"
              id="children"
              className="h-5 w-5 ml-4 mt-1"
              value="Children's Literature"
              onChange={handleChange}
            />
          </li>
          <li className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
            <label htmlFor="art" className="text-lg">
              Comedy
            </label>
            <input
              type="radio"
              name="genre"
              id="comedy"
              className="h-5 w-5 ml-4 mt-1"
              value="Comedy"
              onChange={handleChange}
            />
          </li>
          <li className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
            <label htmlFor="satire" className="text-lg">
              Satire
            </label>
            <input
              type="radio"
              name="genre"
              id="satire"
              className="h-5 w-5 ml-4 mt-1"
              value="Satire"
              onChange={handleChange}
            />
          </li>
          <li className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
            <label htmlFor="war" className="text-lg">
              War
            </label>
            <input
              type="radio"
              name="genre"
              id="war"
              className="h-5 w-5 ml-4 mt-1"
              value="War"
              onChange={handleChange}
            />
          </li>
          <li className="flex justify-between items-center hover:scale-105 transition-transform duration-300">
            <label htmlFor="classic" className="text-lg">
              Classic
            </label>
            <input
              type="radio"
              name="genre"
              id="classic"
              className="h-5 w-5 ml-4 mt-1"
              value="Classic"
              onChange={handleChange}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Filter;
