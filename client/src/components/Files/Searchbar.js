import React, { Component } from 'react';
import "../Style/searchbar.css";
import axios from 'axios';



class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            results: {},
            loading: false,
            message: "",

        }
        this.cancel = "";

    };

    renderResults = (updatedPageNumber, query) => {
        // const pageNumber = updatedPageNumber ? `&page=4${updatedPageNumber}` : "";
        // const queryURL = `${}`;

        if (this.cancel) {
            this.cancel.cancel();
        }
        this.cancel = axios.CancelToken.source();

        axios({
            "method": "GET",
            "url": "https://airbnb-com.p.rapidapi.com/listings/nearby/37.788719679657554/-122.40057774847898",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "airbnb-com.p.rapidapi.com",
                "x-rapidapi-key": "e9a234de2amshfb394e36da3e9f0p1fe03fjsnda119de32de4",
                "useQueryString": true
            }, "params": {
                "min_bathrooms": "0",
                "check_out": "2021-02-26",
                "hotel_room": "false",
                "max_guests": "1",
                "check_in": "2021-02-25",
                "private_room": "false",
                "min_bedrooms": "0",
                "offset": "0",
                "entire_home": "false",
                "min_price": "0",
                "max_price": "5000",
                "min_beds": "0",
                "radius": "5",
                "shared_room": "false"
            }
        })
        .then (res => {
            const notFound = ! res.data.listings.length
                            ? 'No more results'
                            : ""
            this.setState ({
                results: res.data.listings,
                message: notFound,
                loading: false
            })
            console.log(res.data)
        })
        .catch (error => {
            if(axios.isCancel(error) || error) {
                this.setState({
                    loading: false,
                    message: "failed"
                })
            }
        })

    };

    handleOnInputChange = (event) => {
        const query = event.target.value;
        this.setState({ query: query, loading: true, message: "" }, () => {
            this.renderResults(1, query);
        });
    };

    renderSearchResults = () => {
        const {results} = this.state;

        if(Object.keys(results).length && results.length) {
            return(<div className="results-comtainer">
                    {results.map(result =>{
                        <a key={result.id} href={result.picture_url} className ="result-pic">
                            <h6 className="public-location"> {result.public_location}</h6>
                            <div className="image-wrapper">
                                <img src={result.picture_url} alt={result.public_location}/>
                            </div>

                        </a>
                    })}
                </div>
            )
        }
    }

    render() {
        const { query } = this.state;
        console.log(this.state)
        return (
            <div className="container">
                <label className="location-label" htmlFor="location-input">
                    <input
                        type="text"
                        name="query"
                        value={query}
                        id="location-input"
                        placeholder="Enter location"
                        onChange={this.handleOnInputChange}
                    />
                </label>

                {this.renderSearchResults()}
            </div>
        )
    }

}



export default Searchbar;