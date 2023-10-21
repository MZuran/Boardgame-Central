import React from 'react'
//import 'bootstrap/dist/css/bootstrap.css'
import Navbar from 'react-bootstrap/Navbar'
import DropDown from './DropDown'
import CartWidget from './CartWidget'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavBar() {
  let popularProductList = [
    <Link to={`/search/type/Link%20Monster`}>Link Monsters</Link>,
    <Link to={`/search/archetype/Blue-Eyes`}>Blue-Eyes Archetype</Link>,
    <Link to={`/card/Szp4egdXrYhrVvF9k7Zh`}>Exodia the Forbidden One</Link>
  ]

  return (
    <div>
      <Navbar className="navbar flex-row">
        <Link to={`/`}>
          <Navbar.Brand className="logo" />
        </Link>
        <ul className="flex-row">
          <Link to={`/search/type/Effect%20Monster`}>
            <li>Monster Cards</li>
          </Link>
          <Link to={`/search/type/Spell%20Card`}>
            <li>Spell Cards</li>
          </Link>
          <Link to={`/search/type/Trap%20Card`}>
            <li>Trap Cards</li>
          </Link>
          <li>
            <DropDown
              classList={'text-dropdown'}
              dropDownItems={popularProductList}
            >
              Popular Products
            </DropDown>
          </li>
          <li>
            <CartWidget></CartWidget>
          </li>
        </ul>
      </Navbar>
    </div>
  )
}
