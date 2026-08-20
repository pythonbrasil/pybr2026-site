import { useRef, useState } from "react";
import "./styles/SimpleSwiper.css";

type SimpleSwiperProps = {
  slides: readonly React.ReactNode[];
  dots?: readonly string[];
  swiperTrackWidth?: string;
};

export default function SimpleSwiper({ slides, dots, swiperTrackWidth = '800px' }: SimpleSwiperProps) {
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);

  const startX = useRef(0);
  const currentX = useRef(0);

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    startX.current = e.clientX;
    currentX.current = e.clientX;
    setDragging(true);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging) return;

    currentX.current = e.clientX;
  }

  function handlePointerUp() {
    if (!dragging) return;

    const distance = currentX.current - startX.current;
    const threshold = 50;

    if (Math.abs(distance) > threshold) {
      if (distance < 0 && index < slides.length - 1) {
        setIndex((prev) => prev + 1);
      } else if (distance > 0 && index > 0) {
        setIndex((prev) => prev - 1);
      }
    }

    setDragging(false);
  }

  function handlePointerCancel() {
    setDragging(false);
  }

  return (
    <div className="swiper">
      <div className="swiper-dots">
        {dots?.map((dot, i) => (
          <img
            key={i}
            src={dot}
            alt=""
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <div
        className="swiper-track"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: dragging ? "none" : "transform 0.3s ease",
          width: `${swiperTrackWidth}`
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onDragStart={(e) => e.preventDefault()}
      >
        {slides.map((slide, i) => (
          <div className="swiper-slide" key={i}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}