/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

  const doMail = () => {
    const email = 'ashleynathansmith@gmail.com'
    location.href = 'mailto:' + email
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="logo-nav">
          <Link to="/" className="navbar-item">S+C</Link>
        </div>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
      <div className="navbar-end">
        <Link to="/jobs/" className="navbar-item is-family-primary has-text-weight-light">Current Jobs</Link>
        <a href="http://localhost:3000/#about" className="navbar-item is-family-primary has-text-weight-light">About Us</a>
        <Link to="/testimonials/" className="navbar-item is-family-primary has-text-weight-light">Testimonials</Link>
      </div>
      <a href="http://localhost:3000/#contact"className="navbar-item is-family-primary has-text-weight-light">Contact Us</a>
    </nav>
  )
}

export default Nav