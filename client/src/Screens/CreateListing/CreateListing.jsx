import React, { useState } from 'react'
import { postListing, addAgent } from '../../Services/listings'
import AgentContainer from '../../Components/AgentCtn/AgentContainer'
import { readOneUser } from '../../Services/users'

export default function CreateListing(props) {
  let url = props.location.pathname
  console.log(props.match.params.id)
  const [formData, setFormData] = useState({
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
  const [connect, setConnect] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const addListing = await postListing(formData)
    props.setListings([...props.listings, addListing])
    addAgent(addListing.id, props.match.params.id)
    props.history.push(`/listings/${addListing.id}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="top-div">
          <img className="list-img" src={formData.img_Url_1} />
          <div className="agent-ctn">
            <h3 className="agent-title">Listing Agents</h3>
            <div className="agent-ctn-list">

            </div>
            {url.includes('new') || url.includes('edit') ? (
              <label className="add-agent-lab">
                Add Agent:
                <select>
                  <option selected disabled>Select Agents</option>
                  {props.allAgents.map(user => (
                    <option>{user.username}</option>
                  ))}
                </select>
              </label>) : (<div></div>)
            }
          </div>
        </div>
        <div className="edit-img-div">
          <label className="edit-img-label">
            Input image URL here:
          <input
              onChange={handleChange}
              className="edit-img"
              name="img_Url_1"
              type="url"
              value={formData.img_Url_1}
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
              value={formData.content}
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
                value={formData.street}
                onChange={handleChange}
              /> <br />
              <input
                type="text"
                placeholder="city"
                className="edit-city address"
                name="city"
                value={formData.city}
                onChange={handleChange}
              /><br />
              <input
                type="text"
                placeholder="state"
                className="edit-state address"
                name="state"
                value={formData.state}
                onChange={handleChange}
              /><br />
              <input
                type="text"
                placeholder="zip"
                className="edit-zip address"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
              />
              <p>{formData.street}, {formData.city}, {formData.state}, {formData.zip}</p>
            </div>
            <div className="info">
              Price:$
          <input
                type="number"
                className="edit-price address"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="info">
              Square Footage:
              <input
                type="number"
                className="edit-sqft address"
                name="square_footage"
                value={formData.square_footage}
                onChange={handleChange}
              />
            </div>
            <div className="info">
              Date Listed:
              <input
                type="date"
                className="edit-date address"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button className="button">Create Listing</button>
      </form>
    </>
  )
}
