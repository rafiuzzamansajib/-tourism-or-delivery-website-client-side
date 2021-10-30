import React, { useEffect, useState } from 'react';
import './Packages.css'
import Package from '../Package/Package';

const Packages = () => {
    const[packages,setPackages] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setPackages(data));
    },[])
    return (
        <div id='package'>
                <h1 className="text-center">Packages</h1>
            <div className="container my-5">
            <div className="package-container  shadow-lg rounded-3">
                {
                    packages.map(service => <Package
                    key={service._id}
                    service={service}
                    ></Package>)
                }
            </div>
            </div>
        </div>
    );
};

export default Packages;