import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

const ManagePackage = () => {
    const [manages,setManages] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/packages')
        .then(res=>res.json())
        .then(data=> setManages(data))
    },[])
    const handelDelete = id =>{
        const url = `http://localhost:5000/packages/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            const remaining = manages.filter(manage => manage._id !== id);
            setManages(remaining);
        })
    }
    return (
        <>
        <Header></Header>
             <h1 className="text-center">Manage Packages</h1>
            <div className="container my-5">
            <div className="package-container  shadow-lg rounded-3">
                {
                    manages.map(manage => <div
                    key={manages._id}
                    className='package gap-4 p-3'
                    >
                <img src={manage?.img} alt="" />
                <h4>{manage?.name}</h4>
                <p><FontAwesomeIcon icon={faMapMarker}/> {manage?.location}</p>
                <p>Price: {manage?.price}</p>
                <p>Guide Name: {manage.guide}</p>
                <p>Rating: {manage.star} </p>
                <p>Tour Guide: {manage.guide}</p>
                <p>Hotel: {manage.hotelname}</p>
               <button onClick={()=> handelDelete(manage._id)} className="btn btn-custom">Delete</button>  

                    </div>)
                }
 
            </div>
        </div>
            
        </>
    );
};

export default ManagePackage;