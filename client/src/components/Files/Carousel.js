import React, { useState } from 'react';
import "../Style/carousel.css";
import ImagesCar from "../Files/ImagesCar";
import pic1 from "../Files/projectpics/maui.jpg";
import pic2 from "../Files/projectpics/city.jpg"
import pic3 from "../Files/projectpics/mountains.jpg"
import pic4 from "../Files/projectpics/japan.jpeg"
import pic5 from "../Files/projectpics/rocks.jpg"
import pic6 from "../Files/projectpics/bbridge.jpg"







function Carousel() {
    let carouselArray = [
        <ImagesCar src={pic1} />,
        <ImagesCar src={pic2} />,
        <ImagesCar src={pic3} />,
        <ImagesCar src={pic4} />,
        <ImagesCar src={pic5} />,
        <ImagesCar src={pic6} />,

    ];
    const [x, setX] = useState(0);
    const scrollLeft = () => {
        x === 0 ? setX(-100 * (carouselArray.length - 1)) : setX(x + 100);
    };
    const scrollRight = () => {
        x === -100 * (carouselArray.length - 1) ? setX(0) : setX(x - 100);
    }

    return (
        <div className="carousel">
            {
                carouselArray.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                            {item}
                        </div>
                    )
                })
            }
            <button id="scrollLeft" onClick={scrollLeft}><i className="fi-xnllxl-chevron"></i></button>
            <button id="scrollRight" onClick={scrollRight}><i className="fi-xnlrxl-chevron"></i></button>

        </div>
    )
}

export default Carousel