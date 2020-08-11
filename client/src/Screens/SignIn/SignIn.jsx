import React, { useState } from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'
import { loginUser } from '../../Services/auth'

export default function SignIn(props) {
  const [formInput, setFormInput] = useState({
    username: '',
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
    const userData = await loginUser(formInput)
    props.setCurrentUser(userData)
    props.history.push('/')
  }

  return (
    <form className="sign-form" onSubmit={handleSubmit}>
      <h2>Login:</h2>
      <label className="username-label">
        Username:
         <input
          className="username-input"
          name="username"
          type="text"
          value={formInput.username}
          onChange={handleChange}
        />
      </label>

      <label className="password-label">
        Password:
         <input
          className="password-input"
          name="password"
          value={formInput.password}
          type="password"
          onChange={handleChange}
        />
      </label>
      <button className="sign-btn">Sign In</button>

      <div className="reg-div">
        <span>Don't have an account?</span><Link to="/register">Sign up!</Link>
      </div>
    </form>
  )
}
