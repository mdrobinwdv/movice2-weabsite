import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import MovieGallary from '../components/MovieGallary'
import { Toaster } from 'react-hot-toast'
import MovieMustGallary from '../components/MovieMustGallary'
import Footer from '../components/Footer'

function Home() {
  const [searchText, setSearchText] = useState("")
  return (
    <>
      <div>
        <Navbar searchText = {searchText} setSearchText = {setSearchText}></Navbar>
        <ImageSlider></ImageSlider>
        <main>
          <MovieGallary></MovieGallary>
          <Toaster position='top-right'></Toaster>
          <MovieMustGallary searchText = {searchText}></MovieMustGallary>
        </main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Home
