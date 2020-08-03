import React, {Component} from 'react';
import {Consumer} from "../../context";
import Loader from "./Loader";
import Listing from "./Listing"




class Tracks extends Component {
render() {
    return <Consumer>
        {value =>{
            const {listings} = value;
            console.log(value);
            if (listings === undefined || listings.length ===0){
                return <Loader/>
            }else { 
                return (
                    <React.Fragment>
                        <h2 className="text-center mb-4">Listing Results</h2>
                    <div className="row">
                        {listings.map(item =>(
                            <Listing key={item.listing.id} listing={item.listing}/>
                        ))
                        }
                    </div>
                    </React.Fragment>

                );}
        }}
    </Consumer>

}
}

export default Tracks;