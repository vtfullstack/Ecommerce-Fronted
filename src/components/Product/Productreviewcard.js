import React from 'react'
import './ProductreviewCard.css';
import ReactStars from 'react-rating-stars-component';
import Profile from '../../icons/Profile.png'
import { Card, Carousel, Button, } from 'react-bootstrap';
const Productreviewcard = ({ review }) => {

    const options = {
        value: review.rating,
        readOnly: true,
        precision: 0.5,
    };

    return (
        <div className='preview'>
            <div className="reviewCard">
            <img src={Profile} alt="User" />
            <p>{review.name}</p>
            <ReactStars {...options} />
            <span className="reviewCardComment">{review.comment}</span>
        </div>
        </div>
    );
};


export default Productreviewcard