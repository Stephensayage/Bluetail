import React, { useState } from 'react'

export default function Register() {
  const [formInput, setFormInput] = useState({
    username: '',
    email: '',
    password: ''
  })




  return (<>
    <h2>Simplicity is the ultimate sophistication</h2>
    <form >
      <h3>Register</h3>
      <label>
        Email:
         <input
          name="email"
          type="text"
          value={formInput.email}
        // onChange={}
        />
      </label>
      <label>
        Username:
         <input
          name="username"
          type="text"
          value={formInput.username}
        // onChange={}
        />
      </label>
      <label>
        Password:
         <input
          name="password"
          type="text"
          value={formInput.password}
        // onChange={}
        />
      </label>
    </form>
  </>
  )
}
