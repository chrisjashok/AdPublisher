import React from 'react'
import CustomEventItem from './customEventItem';

export default function EventList() {

    const sampleEvents = [
  {
    id: 1,
    image: 'https://via.placeholder.com/100',
    title: 'Music Fest 2025',
    description: 'A celebration of music with live bands and food.',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/100',
    title: 'Startup Pitch Night',
    description: 'Watch startups pitch their ideas to investors.',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/100',
    title: 'Art Expo',
    description: 'Discover contemporary artwork from local artists.',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/100',
    title: 'Gaming Marathon',
    description: '24-hour live gaming event with prizes.',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/100',
    title: 'Book Fair',
    description: 'Find great books and meet your favorite authors.',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/100',
    title: 'Health & Wellness Meetup',
    description: 'Join experts to talk about fitness and mindfulness.',
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/100',
    title: 'Photography Walk',
    description: 'Capture the city with fellow photographers.',
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/100',
    title: 'Tech Conference 2025',
    description: 'A full-day conference with talks from tech leaders.',
  },
  {
    id: 9,
    image: 'https://via.placeholder.com/100',
    title: 'Cooking Workshop',
    description: 'Learn to cook gourmet meals with a top chef.',
  },
  {
    id: 10,
    image: 'https://via.placeholder.com/100',
    title: 'Charity Run',
    description: 'Run for a cause and help raise funds.',
  },
];

 const handleExplore = (title) => {
    alert(`Exploring "${title}"`);
  };

  return (
     <div className="event-list">
      {sampleEvents.map((event) => (
        <CustomEventItem
          key={event.id}
          image={event.image}
          title={event.title}
          description={event.description}
          onExplore={() => handleExplore(event.title)}
        />
      ))}
    </div>
  )
}
