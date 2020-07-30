import React from 'react'

function ImagesCar ({scr}) {
    let imgStyle = {
        width:100+"%",
        height:"auto"
    }
    return <img scr={scr} alt="slide-img" style={imgStyle}></img>

}

export default ImagesCar