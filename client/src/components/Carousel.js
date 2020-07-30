import React, {useState} from 'react';
import "./carousel.css";
import ImagesCar from "./ImagesCar";
import pic1 from "../projectpics/beach.jpg";
import pic2 from "../projectpics/city.jpg"
import pic3 from "../projectpics/mountains.jpg"
import pic4 from "../projectpics/nyc.jpg"
import pic5 from "../projectpics/rocks.jpg"




function Carousel () {
    let carouselArray = [
    <ImagesCar scr={pic1}/>,
    <ImagesCar scr={pic2}/>,
    <ImagesCar scr={pic3}/>,
    <ImagesCar scr={pic4}/>,
    <ImagesCar scr={pic5}/>];
    const [x, setX] = useState(0);
    const scrollLeft=()=>{
        x=== 0 ? setX(-100 *(carouselArray.length -1)) : setX(x + 100);
    };
    const scrollRight=()=>{
       x===-100 *(carouselArray.length -1) ? setX(0): setX(x - 100);
    }

    return(
        <div className="carousel">
            {
                carouselArray.map((item,index)=>{
                    return(
                        <div key={index}className="slide" style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            <button id="scrollLeft" onClick={scrollLeft}>left</button>
            <button id="scrollRight" onClick={scrollRight}>right</button>

        </div>
    )
}

export default Carousel