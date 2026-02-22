import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MovieCard from "./MovieCard";

function MovieMustGallary({ searchText = "" }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Movies.json")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
        toast.success(`Loaded ${data.length} movies successfully!`);
      })
      .catch((err) => {
        console.error("Error loading movies", err);
        setLoading(false);
        toast.error("Failed to load movies!");
      });
  }, []);

  const filteredMovies = movies
    .filter((movie) => movie.rating > 7)
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );

  if (loading) {
    return <h2>Loading movies...</h2>;
  }

  // 👇 Responsive settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="movie-gallery px-4">
      <h2 className="mb-4">🎬 Must Watch Movies</h2>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={true}
        showDots={false}
      >
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="px-2">
            <MovieCard movie={movie} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default MovieMustGallary;