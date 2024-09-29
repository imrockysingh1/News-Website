import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-danger" to="/">News Villa</Link>
    <nav className="navbar navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/General">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Technology">Technology</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
