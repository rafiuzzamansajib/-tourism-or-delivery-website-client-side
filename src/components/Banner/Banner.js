import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from './../../images/banner1.jpg'
import banner2 from './../../images/banner2 .jpg'
import banner3 from './../../images/banner 3.jpg'

const Banner = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item interval={1500}>
                <img
                className="d-block w-100 img-size"
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="text-dark">ADVENTURE IS WORTHWHILE</h3>
                    <p className="text-dark">Dicover New Places With Us, Adventure Await</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100 img-size"
                src={banner2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3 className="text-dark">ADVENTURE IS WORTHWHILE</h3>
                <p className="text-dark">Dicover New Places With Us, Adventure Await</p>
                </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
                <img
                className="d-block w-100 img-size"
                src={banner3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 className="text-dark">ADVENTURE IS WORTHWHILE</h3>
                <p className="text-dark">Dicover New Places With Us, Adventure Await</p>
                </Carousel.Caption>
             </Carousel.Item>
        </Carousel>
        </>
    );
};

export default Banner;