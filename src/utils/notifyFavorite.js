import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyFavorite = (movie, added) => {
  const message = added
    ? `❤️ "${movie.title}" added to favorites!`
    : `💔 "${movie.title}" removed from favorites`;
  toast[added ? "success" : "info"](message, {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true
  });
};

export default notifyFavorite;
