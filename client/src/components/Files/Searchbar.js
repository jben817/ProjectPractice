import React, { Component } from 'react';
import "../Style/searchbar.css";
import axios from 'axios';
import { Consumer } from "../../context";



class Searchbar extends Component {
    state = {
        location: "",
        guests: ""
    };

    searchLocation = (e) => {
    e.preventDefault();
    axios({
        "method":"GET",
        "url":"https://airbnb-com.p.rapidapi.com/listings/nearby/37.788719679657554/-122.40057774847898",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"airbnb-com.p.rapidapi.com",
        "x-rapidapi-key":"e9a234de2amshfb394e36da3e9f0p1fe03fjsnda119de32de4",
        "useQueryString":true
        },"params":{
        "check_out":"2021-02-26",
         }
        })
    .then(res => {
        // console.log(res.data)
    this.setState({listings: res.data.listings})
        
})
    .catch (err => console.log(Error));
        

    }
    
    onChange = (e) => {
        this.setState({location: e.target.value});
    }
    
    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-4 text-center">Search Locations</h1>
                            <form onSubmit={this.searchLocation}>
                            <div className="form-group">
                                <input
                                 type="text" className="form-control form-control-lg" placeholder="Location..."
                                name="location"
                                value={this.state.location}
                                onChange={this.onChange}/>
                                 <input
                                 type="text" className="form-control form-control-lg" placeholder="# of Guests"
                                name="guests"
                                value={this.state.guests}
                                onChange={this.onChange}/>

                            </div>
                            <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">Search Locations</button>
                            </form>
                        </div>);
                }}
            </Consumer>

        )
    }
}




export default Searchbar;