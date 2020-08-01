import React, { Component } from "react";
import "./App.css";
import Daterange from "./components/Files/Daterange";
import Carousel from "./components/Files/Carousel";
import Searchbar from "./components/Files/Searchbar";


class App extends Component {
    render() {
        return ( < h2 > Welcome to React 
        <Searchbar/> 
        <Daterange/>   

        <Carousel/>
            
                </h2>


            );
        }
    }

    export default App;