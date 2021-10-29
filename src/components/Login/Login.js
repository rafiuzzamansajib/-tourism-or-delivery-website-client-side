import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <Header></Header>
            <div className='p-2 mx-4'>
            <button onClick={signInUsingGoogle} className="btn btn-light border"><FontAwesomeIcon  icon={faGoogle}/> Google Sign In</button>
            </div>
            
        </div>
    );
};

export default Login;