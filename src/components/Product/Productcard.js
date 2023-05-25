
import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component';
import './productcard.css'
import { useParams } from 'react-router-dom';
const Productcard = ({ product }) => {
  
    const prorating=product.ratings;
    const options = {
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
      };
    const keywordparam = useParams()
    return (
        <>
        gcfxzxcgvhbj
            <Link className="productCard" to={`/product/${product._id}`}>
                <div className='imagelist_imgs'>
                    <img src={product.images[0].url} alt={product.name} className='w-100 image-height ' />
                </div>
                <p>{product.name}</p>
                <div>
                    <ReactStars {...options} />{" "}
                    <span className="productCardSpan">
                        (255 Reviews.)
                    </span>
                </div>
                <span>{`₹${product.price}`}</span>
            </Link>
        </>
    )
}

export default Productcard