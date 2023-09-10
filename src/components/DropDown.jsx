import React from 'react'
//import 'bootstrap/dist/css/bootstrap.css'
import Dropdown from 'react-bootstrap/Dropdown'

export default function DropDown({ classList, children, dropDownItems }) {

  let menuChildren = []
  for (let i = 0; i < dropDownItems.length; i++) {
    menuChildren.push(<Dropdown.Item href="#" key={"menu-child-" + i}>{dropDownItems[i]}</Dropdown.Item>,)
  }

  return (
    <div className={classList}>
      <Dropdown>
        <Dropdown.Toggle variant="success">{children}</Dropdown.Toggle>
        <Dropdown.Menu>
          {menuChildren}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
