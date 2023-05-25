import React, { useEffect, useState } from "react";
import "./products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productActions";
import Loader from "../loader/Loader";
import { useAlert } from "react-alert";
import Productcard from "./Productcard";
import Pagination from "react-js-pagination";
import { Col, Row, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { Slider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Searchproduct from "../SearchProduct/Searchproduct";
import ReactStars from "react-rating-stars-component";
import createTypography from "@mui/material/styles/createTypography";
const categories = [
  "Apple",
  "dell",
  "Mi",
  "Realme",
  "Laptop",
  "Mobile",
  "Camera",
  "Speakers",
  "Earphones",
  "Watch",
];
const Products = ({ match }) => {
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const dispatch = useDispatch();
  const alert = useAlert();
  const param = useParams();
  const keyword = param.keyword;
  const [price, setPrice] = useState([0, 25000]);

  const options = {
    value: ratings,
    readOnly: true,
    precision: 0.5,
    edit: false,
    fillColor: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };
  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const ratingHandler = (event, newrating) => {
    setRatings(newrating);
  };
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.show(error);
      dispatch(clearErrors);
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, error, alert]);  

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container-fluid ">
            <div className="row mx-5">
              <div className="col-3 left_div">
                <div className="left-cont">
                  <div className="priceslider">
                    <Typography className="price_Head">
                      <span>Price</span>
                    </Typography>
                    <Slider
                      className="Slider"
                      value={price}
                      onChange={priceHandler}
                      valueLabelDisplay="auto"
                      aria-labelledby="rage-slider"
                      min={0}
                      max={25000}
                    />
                  </div>
                  <div>
                    <div className="category">
                      <Typography className="category_Head">
                        <span>Category</span>
                      </Typography>
                      <ul className="categorylist">
                        {categories.map((category) => (
                          <li
                            className="category-link"
                            key={category}
                            onClick={() => setCategory(category)}
                          >
                            {category}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="fieldsetslider">
                      <fieldset>
                        <Typography
                          component="legend"
                          className="text-center rating_slider"
                        >
                          <span>CUSTOMER RATINGS ABOVE</span>
                        </Typography>
                        <Slider
                          className="Slider"
                          value={ratings}
                          onChange={ratingHandler}
                          valueLabelDisplay="auto"
                          aria-labelledby="continuous-slider"
                          min={0}
                          max={5}
                        />
                      </fieldset>
                      <div className="star">
                        <ReactStars {...options} classNames="text-center" />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-9 right-cont">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6 pro_name">
                        <h2>Popular Products..</h2>
                      </div>
                      <div className="col-6">
                        <Searchproduct />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="pro_itm">
                      {products !== 0 &&
                        products.map((product) => (
                          <Productcard key={product._id} product={product} />
                        ))}
                      {resultPerPage < count && (
                        <div className="paginationBox">
                          <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={resultPerPage}
                            totalItemsCount={productsCount}
                            onChange={setCurrentPageNo}
                            nextPageText="Next"
                            prevPageText="Prev"
                            firstPageText="1st"
                            lastPageText="Last"
                            itemClass="page-item"
                            linkClass="page-link"
                            activeClass="pageItemActive"
                            activeLinkClass="pageLinkActive"
                          />
                        </div>
                      )}
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Products;
