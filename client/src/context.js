import React, {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
    state ={
        listings: [],
    };

    componentDidMount() {
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

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
            
        )
    }
}

export const Consumer = Context.Consumer;
