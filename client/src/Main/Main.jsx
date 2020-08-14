import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import Homepage from '../Screens/Homepage/homepage'

import { readAllListings, readOneListing } from "../Services/listings"
import SignIn from '../Screens/SignIn/SignIn'
import Register from '../Screens/Register/Register'
import ViewListing from '../Screens/ViewListing/ViewListing'
import UserProfile from '../Screens/UserProfile/UserProfile'
import CreateListing from '../Screens/CreateListing/CreateListing'
import EditListing from '../Screens/EditListing/EditListing'

export default function Main(props) {
  const { currentUser, setCurrentUser } = props

  const [listings, setListings] = useState([])

  useEffect(() => {
    getListings()
  }, [])

  const getListings = async () => {
    const allListings = await readAllListings()
    setListings(allListings)
  }

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

      <Route exact path="/listings/:id" render={(props) => (
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

      <Route path="/listings/:id/create" render={(props) => (
        <CreateListing
          {...props}
        />
      )} />

      <Route path="/listings/:id/edit" render={(props) => (
        <EditListing
          {...props}
          listings={listings}
          setListings={setListings}
        />
      )} />

    </main>
  )
}
