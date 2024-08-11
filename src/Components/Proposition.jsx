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
    adaptiveHeight: true,
    arrows: false,
  };

  return (
    <section className="relative w-full h-64 sm:h-72 md:h-full ">
      <Slider {...settings}>
        <div className="w-full h-full">
          <img
            src="comicbackground.webp" // Replace with the correct path
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Add more slides as needed */}
        <div className="w-full h-full">
          <img
            src="comicbackground2.webp"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </section>
  );
}

export default CarouselSection;
