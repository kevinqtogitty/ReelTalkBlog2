import React from 'react';
import json from '../../../db.json';
import '../../stylesheets/homepage.css';
import ReviewCard from './ReviewCards';

export default function RecentPosts() {
  const reviews = json.map((review) => review);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}
    >
      {reviews.slice(0, 6).map((review, index) => (
        <ReviewCard review={review} key={index} />
      ))}
    </div>
  );
}
