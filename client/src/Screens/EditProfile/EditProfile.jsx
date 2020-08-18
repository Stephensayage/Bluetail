import React, { useState, useEffect } from 'react'
import { readOneUser, putUser } from "../../Services/users"
import './EditProfile.css'
import { Redirect } from 'react-router-dom'

export default function EditProfile(props) {
  const [getUser, setGetUser] = useState({
    username: "",
    email: "",
    imgUrl: "",
    bio: ""
  })
  const [listings, setListings] = useState([])
  const [redirect, setRedirect] = useState('false')


  useEffect(() => {
    findUser()
  }, [])

  const findUser = async () => {
    const oneUser = await readOneUser(props.match.params.id)
    setGetUser(oneUser)
    setListings(oneUser.listings)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setGetUser({
      ...getUser,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = await putUser(props.match.params.id, getUser)
    props.setAllAgents(props.allAgents.map(user => {
      return user.id === props.match.params.id ? newUser : user
    }))
    setRedirect('true')
  }

  if (redirect === 'true') {
    return <Redirect to={`/users/${props.match.params.id}`} />
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="profile-ctn">
        <div className="top-profile-ctn">
          <img className="profile-img" src={getUser.imgUrl} />
          <div className="user-info-ctn">
            <input
              className="username"
              type="text"
              name="username"
              value={getUser.username}
              onChange={handleChange}
            />
            {listings.length >= 3 ? <p>Bluetail Premier Agent<img className="gold-star" src="https://i.imgur.com/DDPzUT1.png" /></p> : <p>Bluetail Agent</p>}
            <p>Specialties: Buyer's Agent, Listing Agent, Relocation, Staging</p>
            <input
              className="edit-profile-email"
              type="text"
              name="email"
              value={getUser.email}
              onChange={handleChange}
            /> <br />
            <input
              className="edit-profile-img"
              name="imgUrl"
              type="url"
              value={getUser.imgUrl}
              placeholder="Please enter image url here"
              onChange={handleChange}
            />
          </div>
          <div className="edit-about-me">
            <h3 className="active">About</h3>
            <textarea
              onChange={handleChange}
              name="bio"
              type="text"
              className="edit-user-bio"
              value={getUser.bio}
            /><br />
            <button className="button">Submit</button>
          </div>
        </div>
      </div>
    </form>
  )
}
