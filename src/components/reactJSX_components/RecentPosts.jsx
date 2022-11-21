import React from 'react';
import json from '../../../db.json';
import '../../stylesheets/homepage.css';
import ReviewCard from './ReviewCards';

export default function RecentPosts() {
  const reviews = json.map((review) => review);
  return (
    <div className="postCardContainer">
      {reviews.slice(0, 6).map((review, index) => (
        <ReviewCard review={review} key={index} />
      ))}
    </div>
  );
}
