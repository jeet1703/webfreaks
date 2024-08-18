import React, { useState, useEffect } from 'react';
import '../index.css'; // Ensure this path is correct

function Timer() {
  const targetDate = new Date('2024-12-31T23:59:59');

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center px-4 py-6 bg-black">
      <img
        src="/timerbg.svg"
        loading="eager"
        alt="Timer Background"
        className="absolute z-10 w-full top-28 md:top-0.5 mix-blend-screen"
      />
      <div className="relative z-20 flex flex-col items-center md:mt-10">
        <div className="text-center text-white text-3xl mb-16 md:text-4xl font-quicksand">
          App Launches In
        </div>
        <div className="grid grid-cols-4 gap-3 md:gap-10 justify-center font-protest font-bold">
          <Card time={timeLeft.days} title="DAYS" background="/box1.svg" />
          <Card time={timeLeft.hours} title="HOURS" background="/box2.svg" />
          <Card time={timeLeft.minutes} title="MINS" background="/box3.svg" />
          <Card time={timeLeft.seconds} title="SECS" background="/box4.svg" />
        </div>
      </div>
    </div>
  );
}

function Card({ time, title, background }) {
  return (
    <div className="relative w-[5em] md:w-[10em] lg:w-[100%] max-w-6xl lg:max-w-[300px] h-auto">
      <img
        src={background}
        alt={`${title} Background`}
        loading="eager"
        className="absolute inset-0 w-full h-full z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center bg-transparent p-2 lg:p-10 text-center h-full">
        <div className="flex flex-col items-center lg:gap-3">
          <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl mx-10 text-white font-dangsik">
            {time}
          </div>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#FFB200] font-dangsik">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
