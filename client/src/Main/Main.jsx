import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import Homepage from '../Screens/Homepage/homepage'

import { readAllListings } from "../Services/listings"
import SignIn from '../Screens/SignIn/SignIn'

export default function Main(props) {
  const { setCurrentUser } = props

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








    </main>
  )
}
