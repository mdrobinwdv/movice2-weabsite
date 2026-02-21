import React from 'react'
import { FaEye, FaHeart, FaStarHalfAlt } from "react-icons/fa";


function MovieCard({movie}) {
  return (
    <>
      <div className=' font-mon transition-transform duration-300 hover:scale-105 '>
          <img src={movie.card_picture} alt={movie.title} className=' h-60 mx-auto object-contain rounded-lg '/>
          <div className=' p-5 px-5 space-y-2  '>
               <div className=' flex justify-between px-5 '>
                    <h3 className='  '>{movie.title}</h3>
                    <div className=' flex items-center gap-2 '>
                         <FaEye className=' text-gray-500 '/>
                         <FaHeart className=' text-rose-700 '/>
                    </div>
               </div>
               <div className=' flex justify-between items-center px-5 '>
                    <p className=' text-sm text-gray-400 '>{movie.category}</p>
                    <p className=' text-sm text-gray-400 '>{movie.released_date}</p>
               </div>
               <div className=' flex justify-between items-center px-5 '>
                    <p className=' text-sm text-black font-extrabold bg-yellow-400 rounded px-2 '>{movie.platform}</p>
                    <p className=' text-sm text-gray-400 flex justify-center items-center gap-2 '>
                         <FaStarHalfAlt className=' text-yellow-400 '/>
                         {movie.rating}
                    </p>
               </div>
          </div>
      </div>
    </>
  )
}

export default MovieCard
