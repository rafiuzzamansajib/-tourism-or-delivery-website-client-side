import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <> 
         <Header></Header>
         <div className='container'>
             <div className='m-5 shadow-lg'>
             <h2 className='text-center my-5 p-2'>Please, LogIn</h2>
             </div>
            <div className="d-flex justify-content-center align-items-center rounded">
                <div className='p-2 mx-4'>
                <button onClick={handleGoogleLogin} className="btn btn-secondary border"><FontAwesomeIcon  icon={faGoogle}/> Google Sign In</button>
                </div>
            </div>
         </div>
            
        </>
    );
};

export default Login;