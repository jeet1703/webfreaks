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
        alt="Timer Background"
        className="absolute z-10 w-full bottom-0 md:top-0.5 mix-blend-screen"
      />
      <div className="relative z-20 flex flex-col items-center md:mt-10">
        <div className="text-center text-white text-3xl mb-16 md:text-4xl font-Danjisk">
          App Launches In
        </div>
        <div className="flex flex-wrap justify-center gap-4 font-Danjisk font-bold" >
          <Card time={timeLeft.days} title="DAYS" />
          <Card time={timeLeft.hours} title="HOURS" />
          <Card time={timeLeft.minutes} title="MINS" />
          <Card time={timeLeft.seconds} title="SECS" />
        </div>
      </div>
    </div>
  );
}

function Card({ time, title }) {
  return (
    <div className="w-20 sm:w-24 md:w-40 lg:w-48">
      <div className="bg-[#912BBC] rounded-md p-4 md:p-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <div
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white font-dangsik"
          >
            {time}
          </div>
          <div
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#FFB200] font-dangsik"
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
