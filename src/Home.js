import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
    <div className="Home">
    <div className="home--container">
        <img className="home--image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />
        
        <div className="home--row">
        <Product 
        id="01"
        title="See U in C By Ali Karim syed(Author)"
        price={4424.56}
        image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"

        />

        <Product 
         id="02"
         title="Apple iPhone 13 Mini (256GB) - Midnight"
         price={79000}
         image="https://m.media-amazon.com/images/I/61KeIxmldLL._AC_UY218_.jpg"
        />
        <Product 
         id="03"
         title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, 16GB RAM, 512GB"
         price={160990}
         image="https://m.media-amazon.com/images/I/71HCR-N2O2L._AC_UY218_.jpg"/>

        </div>
        
        <div className="home--row">
        <Product 
         id="04"
         title="Apple iMac with Retina 5K Display (27-inch/68.58 cm, 8GB RAM, 3.1GHz"
         price={160990}
         image="https://images-eu.ssl-images-amazon.com/images/I/41k91d0EYfL._SY445_SX342_QL70_FMwebp_.jpg" />

        
        <Product 
         id="05"
         title="Tukzer HD 1080P Webcam with Microphone and Ring Light, Plug and Play Web Camera"
         price={3000}
         image="https://m.media-amazon.com/images/I/61cRLO6tFvL._AC_UY218_.jpg"

        />
        </div>
        
        <div className="home--row">
        <Product 
        id="06"
        title="Artis PS-600VA 600VA Line Interactive UPS for Personal Computers , Desktop PCs, Laptops, Routers"
        price={2379}
        image="https://images-eu.ssl-images-amazon.com/images/I/41utfNT5d7L._SX300_SY300_QL70_FMwebp_.jpg"

        
        />
        </div>

                
        </div>
        </div>
    )
}

export default Home
