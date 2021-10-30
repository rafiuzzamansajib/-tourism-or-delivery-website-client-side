import {faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css'

const Package = ({service}) => {
    const{_id,name,price,description,img,location} = service;
    return (
        <div className='package gap-4 p-3'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p><FontAwesomeIcon icon={faMapMarker}/> {location}</p>
            <p className="">{description.slice(0,90)}..</p>
            <p>Price: {price}</p>
            <Link to={`/package/${_id}`}>
                <button  className="btn btn-custom">Book Now</button>
            </Link>
            
        </div>
    );
};

export default Package;