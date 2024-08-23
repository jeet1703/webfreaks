import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function TrendingSection() {
  const events = [
    {
      image: "/batman.webp",
      title: "Lego Set Building",
      price: "Rs. 230",
      link: "/lego-set-building",
      time: "4 PM",
      location: "Koramangla 4th Block",
    },
    {
      image: "/fifa.webp",
      title: "Fifa all night",
      price: "Rs. 345",
      link: "/fifa-all-night",
      time: "5 PM",
      location: "HSR Layout",
    },
    {
      image: "/sensory.webp",
      title: "Sensory Deprivation tank | Soft World",
      price: "Rs. 499",
      link: "/sensory-deprivation-tank",
      time: "1 AM",
      location: "Indiranagar",
    },
    {
      image: "/car.webp",
      title: "Mid-night Racing",
      price: "Rs. 999",
      link: "/mid-night-racing",
      time: "1 AM",
      location: "Indiranagar",
    },
  ];

  return (
    <div className="starsection text-white  px-10 md:px-24 md:-mt-[10%] z-30 ">
      <div className="flex items-center mb-10">
        <img src="./bal.svg" alt="Explore Icon" className="w-auto z-30" />
        <h2 className="text-2xl md:text-4xl font-bold z-30">Trending</h2>
      </div>

      {/* Adjust the grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 md:gap-14  ">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

function EventCard({ event }) {
  return (
    <div className="bg-black overflow-hidden shadow-lg relative flex flex-col items-center justify-between h-full w-full">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col items-center justify-center flex-grow w-full">
        <h3 className="text-xl font-bold mb-4 text-center">{event.title}</h3>
        <a
          href={event.link}
          className="bg-[#6D13FF] text-white py-2 px-10 mb-2 font-bold rounded-lg inline-block hover:bg-[#5304d4] transition text-center"
        >
          {event.price}
        </a>
        <div className="mt-4 text-center space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <FontAwesomeIcon icon={faCalendar} className="text-white" />
            <p className="text-sm leading-none">{event.time}</p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
            <p className="text-sm leading-none">{event.location}</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 p-2">
        <img src="/hot.svg" alt="Hot" className="w-auto" />
      </div>
      <div className="absolute bottom-0 right-0 p-2">
        <img src="/yellowsemi.svg" alt="Yellow Semi" className="w-auto" />
      </div>
    </div>
  );
}

export default TrendingSection;
