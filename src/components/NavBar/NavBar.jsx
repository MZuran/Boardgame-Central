import React from 'react'
//import 'bootstrap/dist/css/bootstrap.css'
import Navbar from 'react-bootstrap/Navbar'
import DropDown from './DropDown'
import CartWidget from './CartWidget'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavBar() {

  let popularProductList = ['Settlers of Catan', 'Monopoly', 'Star Realms']

  return (
    <div>
      <Navbar className="navbar flex-row">
        <Navbar.Brand className="logo"></Navbar.Brand>
        <ul className="flex-row">
          <Link to={`/type/type=Effect Monster`}><li>Monster Cards</li></Link>
          <Link to={`/type/type=Spell Card`}><li>Spell Cards</li></Link>
          <li>Trap Cards</li>
          <li>
            <DropDown classList={'text-dropdown'} dropDownItems={popularProductList}>Popular Products</DropDown>
          </li>
          <li>
            <CartWidget></CartWidget>
          </li>
        </ul>
      </Navbar>
    </div>
  )
}
