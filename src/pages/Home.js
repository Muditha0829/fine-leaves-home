import React, { Component } from 'react';
import Hero from '../components_home/Hero';
import OurProducts from '../components_home/Our_Products';
import Footer from '../components_home/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Hero />
                <OurProducts />
                <Footer />
            </div>
        );
    }
}

export default Home;