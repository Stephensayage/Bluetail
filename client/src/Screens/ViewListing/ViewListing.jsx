import React, { useState } from 'react'
import { readOneListing } from '../../Services/listings'
import { useEffect } from 'react'
import './ViewListing.css'

export default function ViewListing(props) {
  const [listing, setListing] = useState([])
  const [agents, setAgents] = useState([])

  useEffect(() => {
    getListing()
  }, [])

  const getListing = async () => {
    const oneListing = await readOneListing(props.match.params.id)
    setListing(oneListing)
    let getAgents = oneListing.users.map(users => (users))
    setAgents(getAgents)
  }

  return (
    <>
      <div className="top-div">
        <img className="list-img" src={listing.img_Url_1} />
        <div className="agent-ctn">
          <h3 className="agent-title">Listing Agents</h3>
          {agents.map(user =>
            <>
              <div className="agent-ctn-list">
                <img className="agent-img-listing" src={user.imgUrl} />
                <p className="agent-name">{user.username}</p>
              </div>
            </>)}
        </div>
      </div>
      <div className="bottom-div">
        <div className="content-ctn">
          About
          <p className="content">
            {listing.content}
          </p>
        </div>
        <div className="info-ctn">
          <div className="info">
            Address:
            <p>{listing.street}, {listing.city}, {listing.state}, {listing.zip}</p>
          </div>
          <div className="info">
            Price:
            <p>${listing.price}</p>
          </div>
          <div className="info">
            Square Footage:
            <p>{listing.square_footage} sqft</p>
          </div>
          <div className="info">
            Date Listed:
            <p>{listing.date}</p>
          </div>
        </div>
      </div>
    </>
  )
}
