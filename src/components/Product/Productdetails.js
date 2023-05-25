import './productdetails.css';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Carousel from 'react-material-ui-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import ReactStars from 'react-rating-stars-component';
import Loader from '../../components/loader/Loader'

import Productreviewcard from './Productreviewcard.js'
import { clearErrors, getProductDetails } from '../../actions/productActions';
const Productdetails = () => {
    const { id } = useParams();
    console.log("0000id is",id)
    const alert = useAlert()
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.productDetails);
    useEffect(() => {
        if (error) {
            alert.show(error)
            dispatch(clearErrors)
        }
        dispatch(getProductDetails(id))
    }, [dispatch,error,alert])
    return (
        <>
            {
                loading ? (
                    <Loader/>
                ) : (
                    <>
                        <Container>
                            <Row className='mt-5'>
                                <Col lg='6' md='6' sm='12' xs='12'>
                                    <div className='product_images'>
                                        <Carousel>
                                            {product?.images &&
                                                product.images.map((item, i) => (
                                                    <img
                                                        className="CarouselImage"
                                                        key={i}
                                                        src={item.url}
                                                        alt={`${i} Slide`}
                                                    />
                                                ))}
                                        </Carousel>
                                    </div>
                                </Col>
                                <Col lg='6' md='6' sm='12' xs='12' style={{ background: 'rgb(239 227 227 / 52%)' }} className='disc_col'>
                                    {
                                        !product ? (
                                            <Loader />
                                        ) : (
                                            <div className=''>
                                                <div className="detailsBlock-1">
                                                    <h2>{product.name}</h2>
                                                    <p>Product # {product._id}</p>
                                                </div>
                                                <div className="detailsBlock-2">
                                                    {/* <Rating  /> */}
                                                    <span className="detailsBlock-2-span">
                                                        {" "}
                                                        ({product?.numOfReviews} Reviews)
                                                    </span>
                                                </div>
                                                <div className="detailsBlock-3">
                                                    <h1>{`₹${product.price}`}</h1>
                                                    <div className="detailsBlock-3-1">
                                                        <div className="detailsBlock-3-1-1">
                                                            <button >-</button>
                                                            <input readOnly type="number" value="4" />
                                                            <button >+</button>
                                                        </div>
                                                        <button
                                                            disabled={product.Stock < 1 ? true : false}

                                                        >
                                                            Add to Cart
                                                        </button>
                                                    </div>

                                                    <p>
                                                        Status:
                                                        <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                                                            {product.Stock < 1 ? "OutOfStock" : "InStock"}
                                                        </b>
                                                    </p>
                                                </div>

                                                <div className="detailsBlock-4">
                                                    Description : <p>{product.description}</p>
                                                </div>

                                                <button className="submitReview">
                                                    Submit Review
                                                </button>
                                            </div>
                                        )
                                    }

                                </Col>
                            </Row>
                            <div className=' mt-5 card_pro border-2'>
                                <h3 className="reviewsHeading" style={{ background: '#f86b00' }}>REVIEWS</h3>
                                {product?.reviews && product?.reviews[0] ? (
                                    <div className="reviews" id='reviews'>
                                        {product?.reviews &&
                                            product.reviews.map((review) => (
                                                <Productreviewcard key={review._id} review={review} />
                                            ))}
                                    </div>
                                ) : (
                                    <p className="noReviews">No Reviews Yet</p>
                                )}
                            </div>
                        </Container >
                    </>
                )
            }
            <div className='maindiv'>

            </div>
        </>
    )
}

export default Productdetails
