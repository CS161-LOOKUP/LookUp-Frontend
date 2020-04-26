import React from "react"
import { Navbar, Nav, Button } from "react-bootstrap"
import { logout } from "../../api/authentication"
import { useHistory } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"

const Header: React.FC = () => {
  // const history = useHistory()
  // const user: User = useSelector((state: RootState) => state.user.user)
  // const dispatch = useDispatch()
  // const session = localStorage.getItem("token")
  return (
    // bg = "light"
    <Navbar expand="lg">
      <Navbar.Brand href="/">Look Up</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            style={{ padding: "2px 10px", marginRight: "10px", border: "1px solid", borderRadius: "20px" }}
            activeStyle={{
              fontWeight: "bold",
              color: "black",
            }}
            to="/createApartment"
          >
            Create
          </NavLink>
          <NavLink
            style={{ padding: "2px 8px", marginRight: "10px", border: "1px solid", borderRadius: "20px" }}
            activeStyle={{
              fontWeight: "bold",
              color: "black",
            }}
            to="/user/favorites"
          >
            Favorites
          </NavLink>
          <NavLink
            style={{ padding: "2px 8px", marginRight: "10px", border: "1px solid", borderRadius: "20px" }}
            activeStyle={{
              fontWeight: "bold",
              color: "black",
            }}
            to="/user/apartments"
          >
            Posts
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
