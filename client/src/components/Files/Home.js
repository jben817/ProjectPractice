import React from "react";
import Listings from "./Listings";
import Searchbar from "./Searchbar";
import Daterange from "./Daterange";


const Home = () => {
    return(
        <React.Fragment>
            <Daterange />
           <Searchbar/>
            <Listings/>
        </React.Fragment>
    )
}

export default Home;