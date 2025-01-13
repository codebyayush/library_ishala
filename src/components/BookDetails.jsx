import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';


const BookDetails = () => {

  const {bookId} = useParams();
  const navigate = useNavigate();

  const bookArr = useSelector((state) => state.store.storeArr);

  const book = bookArr.find((book) => book.id == bookId);

  console.log(book);
  

  return (
    <>
        <div className='bg-[#acacac] pt-20 screen-max-6:pt-52 flex flex-col items-center h-screen screen-max-14:h-fit '>
            <h1 className='text-4xl font-bold text-stone-700'>Book Details</h1>
            <img src={book.cover_image} alt="cover_image" height={300} width={300} className='mt-4'/>
            <h2 className='text-3xl font-medium mt-5'>Title: <i>{book.title}</i></h2>
            <p className='font-medium mt-2'>Description: <i>{book.description}</i></p>
            <p className='font-medium mt-2'>Genre: <i>{book.genre.map((genre) => genre + ", ")}</i></p>
            <p className='font-medium mt-2'>Publication Year: <i>{book.publication_year}</i></p>
            <p className='font-medium mt-2'>Author: <i>{book.author}</i></p>
            <button onClick={() => navigate("/")} className='p-3 broder-2 bg-[#8b8b8b] rounded-xl hover:text-white hover:bg-[#5e5e5e] pl-10 pr-10 mt-4 font-medium shadow-lg hover:transition duration-300'>Go back</button>
        </div>
    </>
  )
}

export default BookDetails;