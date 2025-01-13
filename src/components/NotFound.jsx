import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

  return (
    <div className='bg-[#acacac] flex flex-col items-center pt-72 h-screen '>
      <h1 className='text-5xl font-bold text-stone-700'>Page Not Found</h1>
      <button onClick={() => navigate("/")} className='p-3 broder-2 bg-[#8b8b8b] rounded-xl hover:text-white hover:bg-[#5e5e5e] pl-10 pr-10 mt-4 font-medium shadow-lg hover:transition duration-300'>Go back to home page</button>

    </div>
  )
}

export default NotFound;