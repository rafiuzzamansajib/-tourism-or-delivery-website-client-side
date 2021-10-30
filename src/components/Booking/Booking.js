import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Booking = () => {
    const {packageId} = useParams()
    const[item,setItem] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/packages/${packageId}`)
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[])
    return (
        <>
        <Header></Header>
        <div className="package-container rounded-3">
            <div className='package shadow-lg p-3'>
                <img src={item?.img} alt="" />
                <h4>{item?.name}</h4>
                <p><FontAwesomeIcon icon={faMapMarker}/> {item?.location}</p>
                <p>Price: {item?.price}</p>
                <p>Guide Name: {item.guide}</p>
                <p>Rating: {item.star} </p>
                <p>Tour Guide: {item.guide}</p>
                <p>Hotel: {item.hotelname}</p>
                <p className="">{item?.description}</p>
                <Link to={`/orderplace`}>
                    <button className="btn btn-custom">Order Place</button>
                </Link>    
            </div>
        </div>
            
        </>
    );
};

export default Booking;