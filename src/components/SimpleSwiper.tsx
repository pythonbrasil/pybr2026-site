import { useState } from "react";
import "./styles/SimpleSwiper.css";

type SimpleSwiperProps = {
  slides: readonly React.ReactNode[];
  dots: readonly string[];
};

export default function SimpleSwiper({ slides, dots }: SimpleSwiperProps) {
  const [index, setIndex] = useState(1);

  if (slides.length !== dots.length) {
    console.warn("slides e dots devem ter o mesmo tamanho");
  }

  return (
    <div className="swiper">
      <div
        className="swiper-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div className="swiper-slide" key={i}>
            {slide}
          </div>
        ))}
      </div>

      <div className="swiper-dots">
        {dots.map((dot, i) => (
          <img
            key={i}
            src={dot}
            alt=""
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
