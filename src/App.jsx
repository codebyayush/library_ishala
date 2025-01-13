import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import BookList from './components/BookList'
import Cart from './components/Cart'
import BookDetails from './components/BookDetails'
import NotFound from './components/NotFound'
import AddBook from './components/AddBook'


function App() {



  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='*' element={<NotFound/>} />
            <Route path='/' element={<BookList/>} />
            <Route path="/addBook" element={<AddBook/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/book/:bookId' element={<BookDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
