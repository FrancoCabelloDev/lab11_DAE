import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Rating from "../widgets/Rating";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; // Ajusta si usas otro servicio

const PremieresSlider = ({ items, onSelect }) => {
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
      }}
      keyboard={{ enabled: true }}
      spaceBetween={16}
    >
      {items.map(movie => {
        const {
          title,
          rating,
          genre,
          duration,
          poster_path,
          description
        } = movie;
        return (
          <SwiperSlide key={movie.id}>
            <article
              className="card d-flex f-direction-column"
              tabIndex={0}
              style={{ cursor: "pointer" }}
              onClick={() => onSelect(movie)}
              onKeyDown={e => e.key === "Enter" && onSelect(movie)}
            >
              <div className="p-relative">
                <img
                  src={
                    poster_path
                      ? poster_path.startsWith("http")
                        ? poster_path
                        : IMAGE_BASE_URL + poster_path
                      : "https://via.placeholder.com/300x450?text=No+Image"
                  }
                  alt={`${title} poster`}
                  className="card__image"
                  loading="lazy"
                />
                {genre && (
                  <span className="badge badge--primary interactive p-absolute t-2 l-2 f-weight-700">
                    {genre}
                  </span>
                )}
              </div>
              <div className="card__body f-1 g-2">
                <h3 className="title title--2xs">{title}</h3>
                <div className="d-flex a-items-center g-2">
                  {rating && <Rating value={rating} />}
                  {duration && (
                    <span className="interactive c-secondary">{duration}</span>
                  )}
                </div>
                {description && (
                  <p className="text text--sm c-shadow">
                    {description.slice(0, 256)}...
                  </p>
                )}
              </div>
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PremieresSlider;