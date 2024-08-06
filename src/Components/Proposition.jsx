import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css"; // Ensure this path is correct

function CarouselSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <section className="relative w-full h-screen">
      <Slider {...settings} className="w-full h-full">
        <div className="w-full h-full">
          <img
            src="comicbackground.png" // Replace with the correct path
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Add more slides as needed */}
        <div className="w-full h-full">
          <img
            src="comicbackground2.png"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </section>
  );
}

export default CarouselSection;
