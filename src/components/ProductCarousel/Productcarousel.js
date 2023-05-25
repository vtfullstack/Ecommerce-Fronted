import "./productcarousel.css";
import React from "react";
import { Carousel, Card, Button, Container,button } from "react-bootstrap";
const Productcarousel = () => {
  return (
    <section className="wrapper">
      <Carousel fade>
        
        <Carousel.Item>
            
          <img
            className="d-block w-100 imgcarousel"
            src="https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?cs=srgb&dl=pexels-pixabay-38537.jpg&fm=jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgcarousel"
            src="https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?cs=srgb&dl=pexels-pixabay-38537.jpg&fm=jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgcarousel"
            src="https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?cs=srgb&dl=pexels-pixabay-38537.jpg&fm=jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Productcarousel;
