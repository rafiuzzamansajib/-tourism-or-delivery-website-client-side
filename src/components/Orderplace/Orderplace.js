import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header';
import './Orderplace.css'

const Orderplace = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/orderplace', data)
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
        <div className="container">
            <h2 className="text-center">Order place confirem</h2>
            <form className="orderplace-form" onSubmit={handleSubmit(onSubmit)}>

            <input defaultValue={user.displayName} {...register("name")} />

            <input defaultValue={user.email} {...register("email", { required: true })} />

            {errors.email && <span className="error">This field is required</span>}

            <input placeholder="Address" defaultValue="" {...register("address")} />

            <input placeholder="City" defaultValue="" {...register("city")} />

            <input placeholder="phone number" defaultValue="" {...register("phone")} />

            <input type="submit" />
            </form>
        </div>
        </>
    );
};

export default Orderplace;