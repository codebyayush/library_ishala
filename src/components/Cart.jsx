import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart } from '../store/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const cartArr = useSelector((state) => state.cart.cartArray);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const removeItem = (id) => {
      dispatch(deleteItemFromCart(id));
  }

  return (
    <>
   <div className="flex w-full flex-wrap justify-center pt-52 bg-[#acacac] h-screen gap-10">
  {cartArr.length > 0 && cartArr.map((book) => (
    <div key={book.id} className="flex flex-col items-center">
      <div className="flex flex-col h-fit">
        <img
          src={book.cover_image}
          alt="cover_image"
          className="object-cover rounded-lg mb-4 h-80 w-80"
        />
        <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
        <button
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          onClick={() => removeItem(book.id)}
        >
          Remove Book
        </button>
      </div>
    </div>
  ))}
  {cartArr.length === 0 && (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-stone-700">Cart is empty</h1>
      <button onClick={() => navigate("/")} className='p-3 broder-2 bg-[#8b8b8b] rounded-xl hover:text-white hover:bg-[#5e5e5e] pl-10 pr-10 mt-4 font-medium shadow-lg hover:transition duration-300'>Go back to home page</button>

    </div>
  )}
</div>

    </>
  )
}

export default Cart;