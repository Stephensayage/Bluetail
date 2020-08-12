import React from 'react'
import "./homepage.css"

export default function Homepage(props) {
  return (
    <div>
      <h3>Current Listings</h3>
      {props.listings.map(listing => (
        <div className="listing-ctn">
          <img className="home-list-img" src={listing.img_Url_1} />
          <span className="list-info">{listing.street}, {listing.city}, {listing.state}, {listing.zip}</span>
          <span>${listing.price}</span><button className="view-list-btn">View Listing</button>
        </div>
      ))}
    </div>
  )
}
