import React, { useRef } from 'react'
import { addBook } from '../store/slices/storeSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const AddBook = () => {

    const dispatch = useDispatch();

    //reference for all the entries
    const titleRef = useRef();
    const authorRef = useRef();
    const genreRef = useRef();
    const descriptionRef = useRef();
    const coverImageRef = useRef();
    const publicationYearRef = useRef();

    const navigate = useNavigate()

    //this will add a new book
    const submitHandler = (e) => {
        e.preventDefault();
        
        // creating a new book with date and current time as id
        // which makes sure it'll be unique for every milisecond
        const newBook = {
            id: new Date().getTime(),
            title: titleRef.current.value,
            author: authorRef.current.value,
            genre: genreRef.current.value,
            description: descriptionRef.current.value,
            cover_image: coverImageRef.current.value,
            publication_year: publicationYearRef.current.value
        }
        console.log(newBook);

        dispatch(addBook(newBook));
        // after submission redirecting to the home page
        navigate("/");
    }


  return (
    <>
    <div className='bg-[#acacac] pt-36 screen-max-6:pt-72 flex flex-col items-center h-screen screen-max-6:h-fit'>
      <h1 className='text-4xl font-bold text-stone-700'>Add Your Book</h1>
      <form onSubmit={submitHandler} className='mt-10 p-5 w-1/3 screen-max-6:w-full border-2 border-[#5e5e5e] rounded-xl'>

        <label className='font-medium text-xl pl-1 text-[#464646]' htmlFor="title">Title</label><br />
        <input type="text" className='w-full p-2 rounded-lg shadow-lg' name="title" id="title" ref={titleRef} required/>   <br /><br />

        <label className='font-medium text-xl pl-1 text-[#464646]' htmlFor="author">Author</label><br />
        <input type="text" className='w-full p-2 rounded-lg shadow-lg' name="author" id="author" ref={authorRef} required/><br /><br />

        <label className='font-medium text-xl pl-1 text-[#464646]' htmlFor="genre">Genre</label><br />
        <input type="text" className='w-full p-2 rounded-lg shadow-lg' name="genre" id="genre" ref={genreRef} required/><br /><br />

        <label className='font-medium text-xl pl-1 text-[#464646]' htmlFor="description">Description</label><br />
        <input type="text" className='w-full p-2 rounded-lg shadow-lg' name="description" id="description" ref={descriptionRef} required/><br /><br />

        <label className='font-medium text-xl pl-1 text-[#464646]' htmlFor="cover_image">Cover Image</label><br />
        <input type="text" className='w-full p-2 rounded-lg shadow-lg' name="cover_image" id="cover_image" ref={coverImageRef} alt='cover_image' required/><br /><br />

        <label className='font-medium text-xl pl-1 text-[#464646]' htmlFor="publication_year">Publication Year</label><br />
        <input type="number" className='w-full p-2 rounded-lg shadow-lg' name="publication_year" id="publication_year" ref={publicationYearRef} required/><br /><br />

        <button type="submit" className='p-3 broder-2 w-full bg-stone-300 rounded-xl hover:text-white hover:bg-stone-500 pl-10 pr-10 font-medium shadow-lg hover:transition duration-300 '>Add Book</button>

      </form>
    </div>
    </>
  )
}

export default AddBook;