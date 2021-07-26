import React from "react";
import {Carousel} from "react-bootstrap"
export const CarouselChild = ({data1}) => {
  console.log("okookokokkkk===>",data1)
     return (
       <div>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={data1.carouselImg1}
            alt="First slide"
            // height="600px"
          />
          <Carousel.Caption>
            <h3>{data1.carouselCaption1}</h3>
            <p>{data1.carouselDescription1}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={data1.carouselImg2}
            alt="Second slide"
            // height="600px"
          />
      
          <Carousel.Caption>
            <h3>{data1.carouselCaption2}</h3>
            <p>{data1.carouselDescription2}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={data1.carouselImg3}
            alt="Third slide"
            // height="600px"
          />
      
          <Carousel.Caption>
            <h3>{data1.carouselCaption3}</h3>
            <p>{data1.carouselDescription3}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
     )
 }