import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

function App() {
  const apiKey = "b0088d75";
  // State to hold movie data
  const [movie, setMovie] = useState(null);
  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?t=${searchTerm}&apikey=${apiKey}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };
  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);
  return (
    <>
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </>
  );
}

export default App;
