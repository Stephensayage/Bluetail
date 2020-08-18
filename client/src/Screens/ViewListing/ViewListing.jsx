import React, { useState } from 'react'
import { readOneListing } from '../../Services/listings'
import { useEffect } from 'react'
import './ViewListing.css'
import AgentContainer from '../../Components/AgentCtn/AgentContainer'
import { Card, Button } from "react-bootstrap"

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
        <AgentContainer agents={agents} />
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
{/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={listing.img_Url_1} />
  <Card.Body>
    <Card.Title>${listing.price}</Card.Title>
    <Card.Text>
    <div className="info">
            Address:
            <p>{listing.street}, {listing.city}, {listing.state}, {listing.zip}</p>
      </div>
      <br/>
      {listing.content}
    </Card.Text>
    <Button variant="primary">View Listing</Button>
  </Card.Body>
</Card> */}