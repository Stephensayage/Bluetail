import React from 'react'
import Header from './header'
import Footer from './footer'

export default function Layout(props) {
  return (
    <div className="page-container">
      <Header />
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
