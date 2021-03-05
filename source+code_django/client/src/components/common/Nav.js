import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {



  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="logo-nav">
          <Link to="/" className="navbar-item is-family-primary has-text-weight-medium">S+C</Link>
        </div>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
      <div className="navbar-end">
        <Link to="/jobs/" className="navbar-item is-family-primary has-text-weight-medium">Current Jobs</Link>
        <a href="http://localhost:3000/#about" className="navbar-item is-family-primary has-text-weight-medium">About Us</a>
        <Link to="/testimonials/" className="navbar-item is-family-primary has-text-weight-medium">Testimonials</Link>
      </div>
      <a href="http://localhost:3000/#contact"className="navbar-item is-family-primary has-text-weight-medium">Contact Us</a>
    </nav>
  )
}

export default Nav