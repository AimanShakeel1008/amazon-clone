import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt="banner"
        />
        <div className="home__row">
          <Product
            key={12890}
            id="12890"
            title="The Lean Startup"
            price={29.99}
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576876l/10127019.jpg"
            rating={3}
          />
          <Product
            key={12891}
            id="12891"
            title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)"
            price={250.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/412Yk7LIQzL._AC_US160_FMwebp_QL70_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            key={12892}
            id="12892"
            title="Samsung Galaxy Buds+ Plus, True Wireless Earbuds (Wireless Charging Case included), Black – US Version"
            price={129.99}
            image="https://m.media-amazon.com/images/I/51ryw1he7xL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            key={12893}
            id="12893"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
            price={429.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_US160_.jpg"
            rating={5}
          />
          <Product
            key={12894}
            id="12894"
            title="Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
            price={275.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41AZOLr72bL._AC_SY200_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            key={12895}
            id="12895"
            title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
            price={64.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
