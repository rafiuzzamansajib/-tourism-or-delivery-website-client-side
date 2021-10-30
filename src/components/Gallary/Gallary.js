import React, { useEffect, useState } from 'react';
import './Gallary.css'

const Gallary = () => {
    const[images,setImages] =useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setImages(data));
    },[])
    return (
        <div id='gallary'>
           <h1 className="text-center">Gallary</h1>
            <div className='container'>
                <div className='row'>
                {
                    images.map(image => <div 
                    key={image.key}
                    className="col-4 p-1">
                        <div className='gallary'>
                        <img src={image.thumb} alt="" />
                        </div>
                    </div>)
                }
                </div>

            </div>
            
        </div>
    );
};

export default Gallary;