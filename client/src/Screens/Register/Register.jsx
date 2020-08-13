import React, { useState } from 'react'
import { registerUser } from '../../Services/auth'
import './Register.css'

export default function Register(props) {
  const [formInput, setFormInput] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormInput({
      ...formInput,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = await registerUser(formInput)
    props.setCurrentUser(userData)
    props.history.push('/')
  }

  return (<>
    <div className="img-ctn">
      <img className="tiny-img" src="https://www.ireviews.com/content/uploads/2017/09/iReviews-avava-britespace-tiny-house_2.jpg" />
      <br />
      <i className="reg-slogan">Simplicity is the ultimate sophistication</i>
    </div>
    <form className="reg-form" onSubmit={handleSubmit}>
      <h3 className="reg-title">Register</h3>
      <label className="email-label">
        Email: <br />
        <input
          className="reg-input"
          name="email"
          type="text"
          value={formInput.email}
          onChange={handleChange}
        />
      </label>
      <label className="username-label">
        Username: <br />
        <input
          className="reg-input"
          name="username"
          type="text"
          value={formInput.username}
          onChange={handleChange}
        />
      </label>
      <label className="password-label">
        Password: <br />
        <input
          className="reg-input"
          name="password"
          type="password"
          value={formInput.password}
          onChange={handleChange}
        />
      </label>
      <button className="reg-btn">Sign Up</button>
    </form>


  </>
  )
}
