import React, { useState, useEffect } from 'react'
import { readOneListing, putListing } from '../../Services/listings'
import './EditListing.css'
import AgentContainer from '../../Components/AgentCtn/AgentContainer'

export default function EditListing(props) {
  let url = props.location.pathname
  const [listing, setListing] = useState({
    street: '',
    state: '',
    city: '',
    zip: '',
    content: '',
    price: 0,
    square_footage: 0,
    date: '',
    img_Url_1: ''
  })
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setListing({
      ...listing,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newListing = await putListing(props.match.params.id, listing)
    props.setListings(props.listings.map(list => {
      return list.id === props.match.params.id ? newListing : list
    }))
    props.history.push(`/listings/${props.match.params.id}`)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="top-div">
          <img className="list-img" src={listing.img_Url_1} />
          <AgentContainer agents={agents} allAgents={props.allAgents} />
        </div>
        <div className="edit-img-div">
          <label className="edit-img-label">
            Input image URL here:
          <input
              onChange={handleChange}
              className="edit-img"
              name="img_Url_1"
              type="url"
              value={listing.img_Url_1}
              placeholder="Please enter image url here"
            />
          </label>
        </div>
        <div className="bottom-div">
          <div className="content-ctn">
            About <br />
            <textarea
              className="edit-content"
              name="content"
              type="text"
              value={listing.content}
              onChange={handleChange}
            />
          </div>
          <div className="info-ctn">
            <div className="info">
              Address:<br />
              <input
                type="text"
                placeholder="street"
                className="edit-street address"
                name="street"
                value={listing.street}
                onChange={handleChange}
              /> <br />
              <input
                type="text"
                placeholder="city"
                className="edit-city address"
                name="city"
                value={listing.city}
                onChange={handleChange}
              /><br />
              <input
                type="text"
                placeholder="state"
                className="edit-state address"
                name="state"
                value={listing.state}
                onChange={handleChange}
              /><br />
              <input
                type="text"
                placeholder="zip"
                className="edit-zip address"
                name="zip"
                value={listing.zip}
                onChange={handleChange}
              />
              <p>{listing.street}, {listing.city}, {listing.state}, {listing.zip}</p>
            </div>
            <div className="info">
              Price:$
          <input
                type="number"
                className="edit-price address"
                name="price"
                value={listing.price}
                onChange={handleChange}
              />
            </div>
            <div className="info">
              Square Footage:
              <input
                type="number"
                className="edit-sqft address"
                name="square_footage"
                value={listing.square_footage}
                onChange={handleChange}
              />
            </div>
            <div className="info">
              Date Listed:
              <input
                type="date"
                className="edit-date address"
                name="date"
                value={listing.date}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button>Submit Changes</button>
      </form>
    </>
  )
}
