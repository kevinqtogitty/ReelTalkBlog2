import React from 'react';
import '../../stylesheets/reviewCardStyle.css';

export default function ReviewCard(props) {
  return (
    <section>
      <div className="card">
        <div className="post-title">
          <a href={props.review.postURL}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '15rem',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}
            >
              {props.review.title}
            </div>
          </a>
        </div>
        <div className="thumbnail">
          <a href={props.review.postURL}>
            {' '}
            <img src={props.review.imgURL} alt="" className="reviewImg" />
          </a>
        </div>
        <div className="post-date">
          <p>{props.review.publishDate}</p>
        </div>
      </div>
    </section>
  );
}
