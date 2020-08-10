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
                tiles="Apple iPhone XR, 64GB, Black "
                ratting={5}
                price={11.95}
                image="https://images-na.ssl-images-amazon.com/images/I/81FyKX6ml6L._AC_SL1500_.jpg"
            />
             <Product 
                id="123"
                tiles="Apple iPhone 8 Plus, 64GB, Space Gray"
                ratting={5}
                price={11.95}
                image="https://images-na.ssl-images-amazon.com/images/I/61rgVTYeoAL._AC_SL1500_.jpg"
            />
            </div>
            <div className="home__row">
                <Product 
                id="123"
                tiles="Apple iPhone 11, 64GB, Unlocked "
                ratting={5}
                price={11.95}
                image="https://images-na.ssl-images-amazon.com/images/I/61DanysfE8L._AC_SL1500_.jpg"
            />
                <Product 
                id="123"
                tiles="Apple iPhone 11 Pro (512GB, Midnight Green)"
                ratting={5}
                price={11.95}
                image="https://m.media-amazon.com/images/I/81mxun+6pEL.jpg"
            />
                {/* <Product 
                id="123"
                tiles="Apple iPhone 11 (64GB, Yellow) "
                ratting={5}
                price={11.95}
                // image="https://images-na.ssl-images-amazon.com/images/I/81FyKX6ml6L._AC_SL1500_.jpg"
                img='./Images/iphone11.png'
            />    */}
            </div> 
        </div>
    )
}

export default Home;
