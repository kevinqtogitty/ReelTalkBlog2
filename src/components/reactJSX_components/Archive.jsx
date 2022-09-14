import React, { useState } from 'react';
import json from '../../../db.json';
import ReviewCard from './ReviewCards';
import '../../stylesheets/homepage.css';
import '../../stylesheets/archiveStyle.css';

export default function Archive() {
  const [searchQuery, setSearchQuery] = useState('');
  const [toggleView, setToggleView] = useState(true);

  const reviews = json.map((film) => film);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleToggle = () => {
    setToggleView(!toggleView);
  };

  return (
    <>
      <div className="utilityBox">
        <input
          type="text"
          placeholder="Movie Title..."
          onChange={(e) => handleSearch(e)}
          className="searchBar"
        />
        <button className="toggleButton" onClick={handleToggle}>
          Toggle View
        </button>
      </div>
      {toggleView === false ? (
        <div
          style={{
            width: '100%'
          }}
        >
          {searchQuery === '' ? (
            <>
              {' '}
              {reviews.map((review, index) => (
                <div style={{ width: 'fit-content' }} key={index}>
                  <a href={review.postURL}>
                    <li style={{ paddingLeft: '1rem' }}>
                      {review.title} - {review.publishDate}
                    </li>
                  </a>
                </div>
              ))}
            </>
          ) : (
            <>
              {reviews.map((review) =>
                review.title
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ? (
                  <div style={{ width: 'fit-content' }}>
                    <a href={review.postURL}>
                      <li>
                        {review.title} - {review.publishDate}
                      </li>
                    </a>
                  </div>
                ) : null
              )}{' '}
            </>
          )}{' '}
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'space-evenly'
          }}
        >
          {searchQuery === ''
            ? reviews.map((review, index) => (
                <ReviewCard review={review} key={index} />
              ))
            : reviews.map((review) =>
                review.title
                  .toLowerCase()
                  .includes(searchQuery.toLocaleLowerCase()) ? (
                  <ReviewCard review={review} />
                ) : null
              )}
        </div>
      )}
    </>
  );
}
