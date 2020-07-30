import React, { Component } from "react";
import "./App.css";
import Daterange from "./components/Daterange";
import Carousel from "./components/Carousel";


class App extends Component {
    render() {
        return ( < h2 > Welcome to React 
        <Carousel/>
                <Daterange/>                  </h2>

            );
        }
    }

    export default App;