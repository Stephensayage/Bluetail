import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'



export default function Footer() {
  return (
    <footer className="footer-ctn">
      <div className="inner-ctn">
        <div className="row">
          <div className="col-div">
            <ul className='list-unstyled'>
              <Link><li className='text-dark foot-li'>ABOUT</li></Link>
              <Link><li className='text-dark foot-li'>CONTACT</li></Link>
              <Link><li className='text-dark foot-li'>HELP</li></Link>
            </ul>
          </div>

          <div className="col-div">
            <ul className='list-unstyled'>
              <Link><li className='text-dark foot-li'>JOBS</li></Link>
              <Link><li className='text-dark foot-li'>AGENT REFERRALS</li></Link>
              <Link><li className='text-dark foot-li'>BLOG</li></Link>
            </ul>
          </div>

          <div className="col-title">
            <i>Web development by Stephen Sayage</i>
          </div>

        </div>

        <div className="icon-ctn">
          <img className="social-icon fb" src="https://image.flaticon.com/icons/svg/733/733547.svg" />
          <img className="social-icon ig" src="https://image.flaticon.com/icons/svg/174/174855.svg" />
          <a href="https://github.com/Stephensayage" target="_blank"><img className="social-icon git" src="https://image.flaticon.com/icons/svg/733/733553.svg" /></a>
          <img className="social-icon li" src="https://image.flaticon.com/icons/svg/733/733561.svg" />
          <img className="social-icon pin" src="https://image.flaticon.com/icons/svg/733/733566.svg" />
          <img className="social-icon twit" src="https://image.flaticon.com/icons/svg/733/733579.svg" />
        </div>
      </div>


    </footer>
  )
}


