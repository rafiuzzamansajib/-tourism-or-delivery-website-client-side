import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Header from '../Header/Header';
import './Addpackage.css'


const Addpackage = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://shrouded-bastion-51336.herokuapp.com/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <>
        <Header></Header>
         <div className="add-package">
            <h2 className='text-center m-5'>Please Add a New Package</h2>
            <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Touring Spot" />
                <input {...register("location", { required: true, maxLength: 20 })} placeholder="Country" />
                <input {...register("hotelname", { required: true, maxLength: 20 })} placeholder="Hotel Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
            </div>
        </div>
        </>
    );
};

export default Addpackage;