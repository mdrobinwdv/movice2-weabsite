import toast from "react-hot-toast";

import React, { useEffect, useState } from 'react'
import CategoriesNavbar from './CategoriesNavbar';
import MovieCard from "./MovieCard";


function MovieGallary() {
     const [movies, setMovies] = useState([]);
     const [loading, setLoading] = useState(true);
     const [selectCategory, setselectCategory] = useState("All");
     const [showAll, setShowAll] = useState(false);

     useEffect(() => {
          fetch("/Movies.json")
          .then(res => res.json())
          .then(data => setMovies(data))
          .catch((error) => {
            console.log(error);
            toast.error("failed to movie data");
          })
          .finally(() => setLoading(false))
     }, []);
     const categories =["All", ...new Set(movies.map((m) => m.category))];
     const filterMovies = selectCategory === "All" ? movies : movies.filter((m) => m.category === selectCategory);
     const visibleMovie = showAll ? filterMovies : filterMovies.slice(0, 8); 
  return (
    <>
      <div className=" w-11/12 mx-auto py-10 ">
      <h1 className=" text-lg lg: text-xl uppercase ">recommended for you</h1>
        <CategoriesNavbar
        categories={categories}
        selectCategory={selectCategory}
        setselectCategory ={setselectCategory}
        ></CategoriesNavbar>
        {
          loading ? 
          (<div className=" h-64 flex justify-center items-center ">
            <span className="loading loading-spinner loading-xl text-yellow-500"></span>
          </div>)
          : filterMovies.length > 0 ? 
          (
            <>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
              {visibleMovie.map((movie) => (
                <MovieCard
                key={movie.id}
                movie={movie}
                ></MovieCard>
              ))}
            </div>
            {
              filterMovies.length > 8 && (
                <div className=" flex justify-center items-center mt-10 ">
                  <button className=" px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-all duration-300 "
                  onClick={() => setShowAll(!showAll)}
                  >{showAll ? "Show Less" : "Show More"}</button>
                </div>
              )
            }
            </>
          )
          : (
            <p className=" text-gray-400 text-center ">No Movie Found</p>
          )
        }
      </div>
    </>
  )
}

export default MovieGallary
