import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import Homepage from '../Screens/Homepage/homepage'

import { readAllListings, readOneListing } from "../Services/listings"
import SignIn from '../Screens/SignIn/SignIn'
import Register from '../Screens/Register/Register'
import ViewListing from '../Screens/ViewListing/ViewListing'
import UserProfile from '../Screens/UserProfile/UserProfile'

export default function Main(props) {
  const { currentUser, setCurrentUser } = props

  const [listings, setListings] = useState([])
  // const [listing, setListing] = useState([])

  useEffect(() => {
    getListings()
  }, [])

  const getListings = async () => {
    const allListings = await readAllListings()
    setListings(allListings)
  }

  // const getListing = async () => {
  //   const oneListing = await readOneListing(props.match.params.id)
  //   setListing(oneListing)
  // }

  return (
    <main>

      <Route path="/" exact render={(props) => (
        <Homepage
          listings={listings}
        />
      )} />

      <Route path="/login" render={(props) => (
        <SignIn
          {...props}
          setCurrentUser={setCurrentUser}
        />
      )} />

      <Route path="/register" render={(props) => (
        <Register
          {...props}
          setCurrentUser={setCurrentUser}
        />
      )} />

      <Route path="/listings/:id" render={(props) => (
        <ViewListing
          {...props}

        />
      )} />

      <Route path="/users/:id" render={(props) => (
        <UserProfile
          {...props}
          currentUser={currentUser}
        />
      )} />



    </main>
  )
}
