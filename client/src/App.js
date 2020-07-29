import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Daterange from "./components/Daterange";

class App extends Component {
    render() {
        return ( < h2 > Welcome to React 
                        <Daterange/>                        </h2>

            );
        }
    }

    export default App;