import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import './index.css'; // Your external CSS

export default function CoustomCountdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = null;
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <Typography variant="h5">🎉 The event has started!</Typography>;
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="countdown-container">
      {timeUnits.map((unit, index) => (
        <div className="countdown-unit" key={index}>
          <Typography className="countdown-value">
            {String(unit.value).padStart(2, '0')}
          </Typography>
          <Typography className="countdown-label">
            {unit.label}
          </Typography>
        </div>
      ))}
    </div>
  );
}
