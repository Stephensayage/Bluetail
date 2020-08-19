import React from 'react'
import { useState, useEffect } from 'react'
import PopUp from '../../Components/Modal/PopUp'
import { readOneUser } from '../../Services/users'
import { Link } from "react-router-dom"
import './UserProfile.css'
import { deleteListing } from '../../Services/listings'

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


  const handleClick = async (id) => {
    await deleteListing(id)
    props.setAllListings(props.allListings.filter(list => {
      return list.id !== id
    }))

    window.location.reload()
  }

  return (
    <div className="profile-ctn">
      <div className="top-profile-ctn">
        <img className="profile-img" src={getUser.imgUrl} />
        <div className="user-info-ctn">
          <p className="username">{getUser.username}<Link to={`/users/${props.match.params.id}/edit`}><img className="edit-profile" src="https://i.imgur.com/c0xry2l.png" /></Link></p>
          {listings.length >= 3 ? <p>Bluetail Premier Agent<img className="gold-star" src="https://i.imgur.com/DDPzUT1.png" /></p> : <p>Bluetail Agent</p>}
          <p>Specialties: Buyer's Agent, Listing Agent, Relocation, Staging</p>
          <p>{getUser.email}</p>
        </div>
        <div className="about-me">
          <h3 className="active">About</h3>
          <p className="user-bio">{getUser.bio}</p>
        </div>
      </div>

      <div className="user-listings-ctn">
        <h3 className="active">Active Listings</h3><Link className="add-list-link" to={`/users/${props.match.params.id}/listing/new`}><button className="add-list button">+ Add Listing</button></Link>
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
              <span className="profile-list-price">${listing.price}</span><span className="profile-list-sqft">{listing.square_footage} sqft</span>
              <div className="listing-buttons">
                <Link to={`/listings/${listing.id}`}><button className="view-listing-btn button">View Listing</button></Link>
                <Link to={`/listings/${listing.id}/edit`}><button className="view-list-btn button">Edit Listing</button></Link>
                <PopUp handleClick={handleClick} listing={listing} />

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

