import React from 'react';
import "../App.css"; // Ensure this path is correct

const genres = [
  {
    id: 1,
    title: "Discovering/Exploring You",
    description: "Diverse hangouts and activities aimed at finding you. Like Lego Construction, Music Band.",
    imgSrc: "./image9.webp",
  },
  {
    id: 2,
    title: "Exploring People",
    description: "Hangout with people from diverse places and cultures. Like Discussing Music, Traditions, Stereotypes, etc.",
    imgSrc: "./img2.webp",
  },
  {
    id: 3,
    title: "Exploring/Loving Earth",
    description: "Earth is the most beautiful thing a human can see. Do things loving nature. Like Farming, Plantation, etc.",
    imgSrc: "./img3.webp",
  },
  {
    id: 4,
    title: "Exploring Fields & Innovation",
    description: "Hangout with enthusiasts from their fields with one common purpose of innovation. Like Exploring Designs, AI, Finance.",
    imgSrc: "./img5.webp",
  },
  {
    id: 5,
    title: "Exploring Games",
    description: "Play & explore diverse types of games online & offline in PS game nights, Monopoly all night, challenges.",
    imgSrc: "./img6.webp",
  },
  {
    id: 6,
    title: "Exploring Skills",
    description: "Hangout with people with skills. Like Pottery making, Carpentering, Sculpturing, Embroidery.",
    imgSrc: "./img4.webp",
  },
];

const ExploreGenres = () => {
  return (
    <div className="relative starsection text-white px-10 py-10 font-quicksand">
      {/* Section Header */}
      <div className="flex items-center mb-10">
        <img src="./logo.svg" alt="Explore Icon" className="w-8 h-8 md:w-10 md:h-10 mr-4" />
        <h2 className="text-2xl md:text-4xl font-bold">Explore Genres</h2>
      </div>

      {/* Grid of Genres */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-start font-quicksand">
        {genres.map((genre) => (
          <div key={genre.id} className="rounded-lg p-6 flex flex-col items-start text-left">
            <img
              src={genre.imgSrc}
              alt={genre.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl  font-bold mt-4 font-quicksand">{genre.title}</h3>
            <p className="text-left text-md font-thin  opacity-80  font-quicksand">
              {genre.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreGenres;
