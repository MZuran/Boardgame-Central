import React from 'react'
//import 'bootstrap/dist/css/bootstrap.css'
import Navbar from 'react-bootstrap/Navbar'
import DropDown from './DropDown'
import CartWidget from './CartWidget'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavBar() {
  let popularProductList = [
    <Link to={`/type/staple=yes`}>Staple Cards</Link>,
    <Link to={`/type/archetype=Blue-Eyes`}>Blue-Eyes Archetype</Link>,
    <Link to={`/card/Exodia_the_Forbidden_One`}>Exodia the Forbidden One</Link>
  ]

  /* let popularProductList = [1,2] */
  //cardinfo.php?format=Rush%20Duel
  return (
    <div>
      <Navbar className="navbar flex-row">
        <Link to={`/`}>
          <Navbar.Brand className="logo" />
        </Link>
        <ul className="flex-row">
          <Link to={`/type/type=Effect Monster`}>
            <li>Monster Cards</li>
          </Link>
          <Link to={`/type/type=Spell Card`}>
            <li>Spell Cards</li>
          </Link>
          <Link to={`/type/type=Trap Card`}>
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
