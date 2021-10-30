import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Gallary from '../Gallary/Gallary';
import Header from '../Header/Header';
import Packages from '../Packages/Packages';
import Reviwes from '../Reviwe/Reviwes';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <Packages></Packages>
            <Reviwes></Reviwes>
            <Gallary></Gallary>
            <Footer></Footer>
        </div>
    );
};

export default Home;