import React from 'react'
import { useState, useEffect } from 'react'
import { readOneUser } from '../../Services/users'
import { Link } from "react-router-dom"
import './UserProfile.css'

export default function UserProfile(props) {
  const [getUser, setGetUser] = useState([])
  const [listings, setListings] = useState([])

  useEffect(() => {
    findUser()
  }, [])

  const findUser = async () => {
    const oneUser = await readOneUser(props.match.params.id)
    setGetUser(oneUser)
    setListings(oneUser.listings)
  }

  // {listings >= 2 ? <p>Bluetail Premier Agent<img className="gold-star" src="https://i.imgur.com/DDPzUT1.png" /></p> : <p>Bluetail Agent</p>}
  return (
    <div className="profile-ctn">
      <div className="top-profile-ctn">
        <img className="profile-img" src={getUser.imgUrl} />
        <div className="user-info-ctn">
          <p className="username">{getUser.username}</p>
          {listings.length >= 2 ? <p>Bluetail Premier Agent<img className="gold-star" src="https://i.imgur.com/DDPzUT1.png" /></p> : <p>Bluetail Agent</p>}
          <p>Specialties: Buyer's Agent, Listing Agent, Relocation, Staging</p>
          <p>{getUser.email}</p>
        </div>
        <div className="about-me">
          <h3 className="active">About</h3>
          <p className="user-bio">{getUser.bio}</p>
        </div>
      </div>

      <div className="user-listings-ctn">
        <h3 className="active">Active Listings</h3>
        <div className="grid-ctn">
          <div className="listing-title-ctn">
            <h4 className="listing-titles">Address</h4><h4 className="listing-titles">Price</h4><h4 className="listing-titles">Square Footage</h4>
          </div>
          {listings.map(listing => (
            <div className="profile-listing-ctn">
              <div className="img-address-ctn">
                <img className="home-list-img" src={listing.img_Url_1} /> <br />
                <span className="profile-list-info">{listing.street}<br /> {listing.city}, {listing.state}, {listing.zip}</span>
              </div>
              <span className="profile-list-price">${listing.price}</span><span className="profile-list-sqft">{listing.square_footage} sqft</span><Link to={`/listings/${listing.id}`}><button className="view-list-btn">View Listing</button></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
