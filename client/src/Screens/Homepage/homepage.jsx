import React from 'react'
import "./homepage.css"
import { Link } from 'react-router-dom'
import { Carousel, Pagination } from "react-bootstrap"

export default function Homepage(props) {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item >,
    );
  }

  return (
    <div className="homepage-ctn">
      <div className="carousel-ctn">
        <Carousel >
          <Carousel.Item >
            <img
              className="d-block w-70 carousel-img"
              src="https://www.tinyheirloom.com/wp-content/uploads/2018/10/breeze_exterior.jpg"
            />
            <Carousel.Caption>
              <div className="info-back">
                <h3>The Breezeway</h3>
                <p>The exterior architecture, and the name The Breezeway, was inspired by envisioning two opposing mountains forming a breezeway in the valley.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-70 carousel-img"
              src="https://www.tinyheirloom.com/wp-content/uploads/2018/10/midcentury_exterior.jpg"
            />

            <Carousel.Caption>
              <div className="info-back">
                <h3>Midcentury Modern Tiny Home</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-70 carousel-img"
              src="https://www.tinyheirloom.com/wp-content/uploads/2019/02/mountain_exterior.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="info-back">
                <h3>Modern Mountain House</h3>
                <p className="m-1">The Modern Mountain House combines present day modernity with old world craftsmanship. Designed to keep you cozy in even the harshest conditions while providing a warm atmosphere with rich wood accents and a fireplace.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <h3 className="current-listing">Current Listings</h3>
      {props.listings.map(listing => (
        <div className="listing-ctn">
          <img className="home-list-img" src={listing.img_Url_1} />
          <span className="list-info"><p className="list-head">Address</p> <br />{listing.street}, {listing.city}, {listing.state}, {listing.zip}</span>
          <span><p className="list-head">Price</p><br />${listing.price}</span><Link to={`/listings/${listing.id}`}><button className="view-list-btn button">View Listing</button></Link>
        </div>
      ))}
      <div>
        <Pagination>{items}</Pagination>

      </div>
    </div>
  )
}
