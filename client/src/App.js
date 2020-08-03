import React, { Component } from "react";
import "./App.css";
import Daterange from "./components/Files/Daterange";
import Carousel from "./components/Files/Carousel";
import Searchbar from "./components/Files/Searchbar";
import Listings from "./components/Files/Listings";
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Viewpage from "./components/Files/Viewpage";
import Home from "./components/Files/Home";

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>

                    < h2 > Welcome to React

                        <Carousel />

                    </h2>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="view/listing/:id" component={Viewpage} />
                    </Switch>
                </Router>

            </Provider>

        );
    }
}

export default App;