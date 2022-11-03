import React from 'react'

export function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Always In Shape GYM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/member">Members</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/instructor">Instructors</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/class">Classes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/device">Devices</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/room">Rooms</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/squash">Squash Courts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/reservation">Reservations</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}


