import React, { useEffect, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './home.css';
import Productcard from '../components/Product/Productcard.js'
import Metadata from './Metadata';
import { clearErrors, getProduct } from '../actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert'
import Loader from '../components/loader/Loader';
import Productcarousel from '../components/ProductCarousel/Productcarousel';

const Home = () => {
    const alert = useAlert()
    const dispatch = useDispatch();

    const { loading, error, products, productsCount } = useSelector((state) => state.products);
    useEffect(() => {
        if (error) {
            alert.show(error)
            dispatch(clearErrors)
        }
        dispatch(getProduct())
    }, [dispatch, error, alert])
    // console.log("Here Home Product is", products, "error", error, "loading..", loading)
    return (
        <>
            {/* {console.log("productsproductsproducts", products)} */}
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <Metadata title="Home" />
                    <section>
                    <Productcarousel/>
                    </section>
                    <section>
                        <Container>
                            <Row>
                                <Col>
                                    <p className="text-center feature_pro mt-3">Featured Products.</p>
                                    <hr />
                                </Col>
                            </Row>
                            <Row >
                                {products &&
                                    products.map((proval, idx) => (
                                        <Col lg='3' md='3' sm='6' xs='6' key={idx} className='d-flex justify-content-center'>
                                            <Productcard product={proval}></Productcard>
                                        </Col>
                                    ))
                                }

                            </Row>
                        </Container>
                        </section>
                </Fragment >
            )
            }
        </>
    )
}

export default Home