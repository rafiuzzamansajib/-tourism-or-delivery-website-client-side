import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import pic1 from './../../images/reviwes/pic1.png'
import pic2 from './../../images/reviwes/pic2.png'
import pic3 from './../../images/reviwes/pic3.png'
const Reviwes = () => {
    return (
        <div>
            <h2 className='text-center'>Reviwes</h2>
            <div className="container">
            <div className='row'>
                <div className='col shadow-lg m-2'>
                    <img className="rounded-circle m-5 p-2" src={pic1} alt="" />
                    <h3 className='text-center'>Alice</h3>
                    <p className='text-center'>We were very happy with our holiday booking and our accommodation. We would book with Travel again and definitely recommend their services to others..</p>
                    <p className='text-center text-warning'>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStarHalfAlt}></FontAwesomeIcon>
                    </p>
                </div>
                <div className='col shadow-lg m-2'>
                    <img className="rounded-circle m-5 p-2" src={pic2} alt="" />
                    <h3 className='text-center'>Alex</h3>
                    <p className='text-center'>I love the way you guys are always very helpful and accomodating. Your service is excellent and I am more than happy to use your organisation for all future holidays.</p>
                    <p className='text-center text-warning'>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStarHalfAlt}></FontAwesomeIcon>
                    </p>
                </div>
                <div className='col shadow-lg m-2'>
                    <img className="rounded-circle m-5 p-2" src={pic3} alt="" />
                    <h3 className='text-center'>Rose</h3>
                    <p className='text-center'>I found your service very good in the holiday acquisition process but lacking in the quality of the accommodation..</p>
                    <p className='text-center text-warning'>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStarHalfAlt}></FontAwesomeIcon>
                    </p>
                </div>
            </div>

            </div>
            
        </div>
    );
};

export default Reviwes;