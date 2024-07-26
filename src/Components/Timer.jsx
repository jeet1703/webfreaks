import React, { useState, useEffect } from 'react';
import '../index.css'; // Ensure this path is correct

function Timer() {
  // Set your target date here
  const targetDate = new Date('2024-12-31T23:59:59');

  // Initial state with the time difference
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
    // Update timer every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center px-4 py-6 bg-black">
      <div className="text-center text-white text-3xl mb-6 md:text-4xl font-Danjisk">
        App Launches In
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Card time={timeLeft.days} title="DAYS" />
        <Card time={timeLeft.hours} title="HOURS" />
        <Card time={timeLeft.minutes} title="MINS" />
        <Card time={timeLeft.seconds} title="SECS" />
      </div>
    </div>
  );
}

function Card({ time, title }) {
  return (
    <div className="w-full md:w-40 lg:w-48">
      <div className="bg-[#912BBC] rounded-md p-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <div
            className="text-4xl md:text-5xl lg:text-6xl text-white"
            style={{ fontFamily: 'Danjisk, sans-serif' }}
          >
            {time}
          </div>
          <div
            className="text-xl md:text-2xl lg:text-3xl text-[#FFB200]"
            style={{ fontFamily: 'Danjisk, sans-serif' }}
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
