import React from 'react'
import { Carousel } from 'react-bootstrap';
import image1 from "../../assets/bannerImages/two-girls-red-coats-models.jpg"
import "./bannerComp.css";

const BannerComp = () => {
  return (
    <>
     <Carousel className="carousel-card carousel-image">
        <Carousel.Item>
          <img
            width={900}
            height={500}
            src={image1}
            className="d-block w-100 banner-img"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Get the trending collections.</h3>
            <p>
              In order to be irreplacable one must always be unique.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <div>
          <img
            width={900}
            height={500}
            className="d-block w-100 car-img" 
            src="https://img.freepik.com/free-photo/cute-stylish-children_155003-8330.jpg?w=996&t=st=1686303648~exp=1686304248~hmac=a082c3a76c74b994f74e0da93b194cf3fffc964b4cc183609b5e2da70c537590"
            alt="Second slide"
            // style={{filter:blur('20%')}}
          />
          
          </div>

          <Carousel.Caption>
          <h3>The joy of dressing is an art.</h3>
            <p>
            Playing dress-up begins at age five and never truly ends.
            </p>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={900}
            height={500}
            className="d-block w-100 car-img"
            src="https://img.freepik.com/free-photo/young-curly-handsome-white-shirt-sitting-white-chair-high-quality-photo_144627-73569.jpg?w=996&t=st=1686304633~exp=1686305233~hmac=f0f6ec1832f5710be449505cae0fbd4fc2fdf3990a343bebeaddb1d57687cc59"
          />

          <Carousel.Caption>
        
          <h3>Fashions fade, style is eternal.</h3>
            <p>Fashion you can buy, but style you possess. The key to style is learning who you are, which takes years. There's no how-to road map to style. It's about self expression and, above all, attitude.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default BannerComp;