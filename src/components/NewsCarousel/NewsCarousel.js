import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./NewsCarousel.css";

import { NewsCarouselItems } from "../InfoItems/NewsCarouselItems";

const NewsCarousel = (props) => {
  return (
    <Carousel className="carousel-style" fade prevIcon={null} nextIcon={null}>
      {NewsCarouselItems.map((item, index) => {
        return (
          <Carousel.Item className="carousel-item" key={index}>
            <img
              className="slide-image"
              src={item.image_url}
              alt={item.title}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default NewsCarousel;
