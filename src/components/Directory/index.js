import React from 'react';
import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';
import Hot from './../../assets/caffeine.jpg';
import Cold from './../../assets/juice.jpg';
import Card from '../Card';
import About from '../About';
import './styles.scss'

const Directory = props => {
  return (
    <div className="directory">
            <div className="wrap">

            {/* <Carousel interval={1000} className = "img-size" >
        <Carousel.Item >
        <img className = "d-block"
        src = "https://mlv6ejvroukd.i.optimole.com/BQGoE9o-ve3lLPhl/w:2000/h:1009/q:auto/https://franklinandsons.co.uk/wp-content/uploads/2021/02/FRANKLIN-SONS-Homepage-Carousel-Banner-v5-A-scaled-1.jpg"
        alt = "First slide" />
        <Carousel.Caption >
        <h3> First slide label </h3> 
        <p> Nulla vitae elit libero, a pharetra augue mollis interdum. </p> 
        </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item>
        <img className = "d-block"
        src = "https://www.ketelone.com/media/1784/carousel_drink.jpg?mode=crop&width=1600&height=900&quality=70"
        alt = "Second slide" />

        <Carousel.Caption>
        <h3> Second slide label </h3> 
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
         </Carousel.Caption>
          </Carousel.Item> 
          <Carousel.Item >
        <img className = "d-block"
        src = "https://pbs.twimg.com/media/E1R8YZCXIAg3s1Y.jpg"
        alt = "Third slide" />

        <Carousel.Caption >
        <h3 > Third slide label </h3>
        <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p> 
        </Carousel.Caption> 
        </Carousel.Item>
        </Carousel> */}
                <div
                 className="item"
                 style={{
                    backgroundImage: `url(${Hot})`
                }}
                 >  <Link to="/search/hot">
                 Shop Hot Drinks
               </Link>
                
                </div>
            <div
            className="item"
            style={{
                backgroundImage: `url(${Cold})`
            }}
            >  
            <Link to="/search/cold">
            Shop Cold Drinks
               </Link>
            
            </div>
            <Card />
            <About />
            </div>
        </div>
    );
}

export default Directory;
