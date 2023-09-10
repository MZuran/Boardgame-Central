import React from 'react'
//import 'bootstrap/dist/css/bootstrap.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import DropDown from './DropDown'

export default function NavBar() {

  let popularProductList = ['Settlers of Catan', 'Monopoly', 'Star Realms']

  return (
    <div>
      <Navbar className="navbar flex-row">
        <Navbar.Brand className="logo"></Navbar.Brand>
        <ul className="flex-row">
          <li>Home</li>
          <li>About us</li>
          <li>
            <DropDown classList={'text-dropdown'} dropDownItems={popularProductList}>Popular Products</DropDown>
          </li>
          <li>FAQ</li>
        </ul>
      </Navbar>
    </div>
  )
}
