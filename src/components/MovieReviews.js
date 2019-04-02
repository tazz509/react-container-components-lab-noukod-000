import React from 'react'

const Review = ({ title, summary }) => (
  <div className="review">
    <h3>{ title }</h3>
    <h4>{ summary }</h4>
  </div>
)


const MovieReviews = ({reviews}) => (
  <div className="review-list">
    { reviews.map(review =>
      <div className="review">
      <h3>{ review.display_title }</h3>
      <h4>{ review.summary_short }</h4>
    </div>) }
  </div>
)
  


export default MovieReviews