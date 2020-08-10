import React from 'react';
import "./Styles/Home.css"
import Product from "./Product"
function Home() {
    return (
        <div className="home">
            <img className="home__imgBanner"src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

            {/* Product ID, Tiles, Price, Ratting, Img */}
            <div className="home__row">
                <Product 
                id="123"
                tiles="365 Days in Italy Picture-A-Day Wall Calendar 2021"
                ratting={5}
                price={11.95}
                image="https://images-na.ssl-images-amazon.com/images/I/61D3Kq0glXL._SX258_BO1,204,203,200_.jpg"
            />
                <Product 
                id="123"
                tiles="365 Days in Italy Picture-A-Day Wall Calendar 2021"
                ratting={5}
                price={11.95}
                image="https://images-na.ssl-images-amazon.com/images/I/61D3Kq0glXL._SX258_BO1,204,203,200_.jpg"
            />
            </div>
            <div className="home__row">
                <Product 
                id="123"
                tiles="365 Days in Italy Picture-A-Day Wall Calendar 2021"
                ratting={5}
                price={11.95}
                image="https://images-na.ssl-images-amazon.com/images/I/61D3Kq0glXL._SX258_BO1,204,203,200_.jpg"
            />
                <Product 
                id="123"
                tiles="365 Days in Italy Picture-A-Day Wall Calendar 2021"
                ratting={5}
                price={11.95}
                image="https://images-na.ssl-images-amazon.com/images/I/61D3Kq0glXL._SX258_BO1,204,203,200_.jpg"
            />
                <Product 
                id="123"
                tiles="365 Days in Italy Picture-A-Day Wall Calendar 2021"
                ratting={5}
                price={11.95}
                image="https://images-na.ssl-images-amazon.com/images/I/61D3Kq0glXL._SX258_BO1,204,203,200_.jpg"
            />
            </div>


        </div>
    )
}

export default Home;
