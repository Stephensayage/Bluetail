import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import Homepage from '../Screens/Homepage/homepage'

import { readAllListings, readOneListing } from "../Services/listings"
import { readAllUsers } from "../Services/users"
import SignIn from '../Screens/SignIn/SignIn'
import Register from '../Screens/Register/Register'
import ViewListing from '../Screens/ViewListing/ViewListing'
import UserProfile from '../Screens/UserProfile/UserProfile'
import CreateListing from '../Screens/CreateListing/CreateListing'
import EditListing from '../Screens/EditListing/EditListing'

export default function Main(props) {
  const { currentUser, setCurrentUser } = props

  const [listings, setListings] = useState([])
  const [allAgents, setAllAgents] = useState([])

  useEffect(() => {
    getListings()
    getAgents()
  }, [])

  const getListings = async () => {
    const allListings = await readAllListings()
    setListings(allListings)
  }
  const getAgents = async () => {
    let getAgents = await readAllUsers()
    setAllAgents(getAgents)
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

      <Route exact path="/users/:id" render={(props) => (
        <UserProfile
          {...props}
          currentUser={currentUser}
        />
      )} />

      <Route exact path="/users/:id/listing/new" render={(props) => (
        <CreateListing
          {...props}
          setListings={setListings}
          listings={listings}
          allAgents={allAgents}
        />
      )} />

      <Route exact path="/listings/:id/edit" render={(props) => (
        <EditListing
          {...props}
          listings={listings}
          setListings={setListings}
          allAgents={allAgents}
        />
      )} />

    </main>
  )
}
