import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/layouts/Header";
import Hero from "./components/modules/Hero";
import PremieresSection from "./components/modules/PremieresSection";
import MovieList from "./components/modules/MovieList";
import Footer from "./components/layouts/Footer";
import { getMovies } from "./utils/movie.utils";

const FAVORITE_KEY = "sin-e-favorites";

const App = () => {
  const [movies] = useState(getMovies());
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem(FAVORITE_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggleFavorite = movie => {
    setFavorites(prev => {
      const exists = prev.some(f => f.id === movie.id);
      const updated = exists
        ? prev.filter(f => f.id !== movie.id)
        : [...prev, movie];
      localStorage.setItem(FAVORITE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const filteredMovies = movies.filter(m =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="main">
        <Hero handleEvent={setSearchTerm} />
        <PremieresSection />
        <MovieList
          id="now-showing"
          title="Now Showing 🎬"
          movies={filteredMovies}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />
        {favorites.length > 0 && (
          <MovieList
            id="favorites"
            title="❤️ Your Favorites ❤️"
            movies={favorites}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;