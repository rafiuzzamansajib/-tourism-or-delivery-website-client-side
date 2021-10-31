import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

const ManageOrders = () => {
    const [manages,setManages] = useState([]);
    useEffect(()=>{
        fetch('https://shrouded-bastion-51336.herokuapp.com/orderplace')
        .then(res=>res.json())
        .then(data=> setManages(data))
    },[])
    const handelDelete = id =>{
        const url = `https://shrouded-bastion-51336.herokuapp.com/orderplace/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            alert("Are Sure To Delete Order")
            const remaining = manages.filter(manage => manage._id !== id);
            setManages(remaining);
        })
    }
    return (
        <>
        <Header></Header>
             <h1 className="text-center">Manage All Orders</h1>
            <div className="container my-5">
            <div className="package-container  shadow-lg rounded-3">
                {
                    manages.map(manage => <div
                    key={manages._id}
                    className='package gap-4 p-3'
                    >
                <h4>{manage?.name}</h4>
                <p>Address: {manage?.address}</p>
                <p>City: {manage.city}</p>
                <p>Booking Date: {manage.date}</p>
                <p>Phone: {manage.phone} </p>
               <button onClick={()=> handelDelete(manage._id)} className="btn btn-custom">Delete</button>  

                    </div>)
                }
 
            </div>
        </div>
            
        </>
    );
};

export default ManageOrders;