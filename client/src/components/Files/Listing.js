import React from 'react';
import {Link} from 'react-router-dom' 

const Listing = (props) =>{
    const {listing} = props;
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                <h3>{listing.city}</h3>
                <img className="image"src={listing.picture_url} alt={listing.picture_url}/>
                <p className="card-text">
                    <strong> Price: </strong>
                </p>
                <Link to={`view/listing/${listing.id}`} className="btn btn-primary" > View Listing
                </Link>


                </div>

            </div>

        </div>
    )
}

export default Listing;