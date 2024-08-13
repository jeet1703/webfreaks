import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css"; // Ensure this path is correct

function CarouselSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false, // Set to false to maintain a consistent height
    arrows: false,
  };

  return (
    <section className="relative w-full h-64 sm:h-72  md:h-fit ">
      <Slider {...settings}>
        <div className="w-full h-full">
          <img
            src="comicbackground.webp" // Replace with the correct path
            alt="Slide 1"
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full">
          <img
            src="comicbackground2.webp"
            alt="Slide 2"
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </section>
  );
}

export default CarouselSection;
