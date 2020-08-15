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
                image="https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-400x460.png"
            />
             <Product 
                id="123"
                tiles="Điện thoại iPhone 11 256GB"
                ratting={5}
                price={29.0580}
                image="https://cdn.tgdd.vn/Products/Images/42/210648/iphone-11-256gb-black-400x460.png"
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
                tiles="Điện thoại iPhone Xs 64GB"
                ratting={5}
                price={11.95}
                image="https://cdn.tgdd.vn/Products/Images/42/190323/iphone-xs-gold-400x460-1-400x460.png"
            />
                <Product 
                id="123"
                tiles="Apple iPhone 11 (64GB, Yellow) "
                ratting={5}
                price={11.95}
                image="https://cdn.tgdd.vn/Products/Images/42/149456/iphone-se-2020-do-400x460-400x460.png"
                
            />   
            </div> 
            <div className="row">
                <Product 
                id="123"
                tiles="Apple iPhone 11 (64GB, Yellow) "
                ratting={5}
                price={11.95}
                 image="https://cdn.tgdd.vn/Products/Images/42/149456/iphone-se-2020-do-400x460-400x460.png"
                
                />
            </div>
        </div>
    )
}

export default Home;
