import React from 'react'
import './header.css'
import { Link, useHistory } from 'react-router-dom'
import { removeToken } from '../../Services/auth'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

export default function Header(props) {

  const history = useHistory()

  const handleLogout = () => {
    props.setCurrentUser(null)
    localStorage.removeItem("authToken")
    removeToken();
    history.push('/')
  }

  return (
    <div className="head-ctn">

      <div className="logo-div">
        <Link to="/"><img className="logo" src="https://image.flaticon.com/icons/svg/2683/2683066.svg" /></Link>
        <h1 className="title">Bluetail Realty</h1>
      </div>
      <ul className="head-ul">

        {
          props.currentUser ? (
            <>
              <Link to="/"><li className="head-li home">Home</li></Link>
              <li className="head-li"> Welcome, <Link className="user-click" to={`/users/${props.currentUser.id}`}>{props.currentUser.username}</Link><button className="logout button" onClick={handleLogout}>Logout</button></li>


            </>
          ) : (
              <>
                <Link to="/"><li className="head-li">Home</li></Link>
                <Link className="login-reg" to='/login'>Login/Register</Link>

              </>
            )}
      </ul>

    </div>
  )
}
