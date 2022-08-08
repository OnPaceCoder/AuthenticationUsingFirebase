import React , {useState , useContext} from "react"

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav , NavItem , NavLink , NavbarText
} from "reactstrap"

import {Link} from "react-router-dom"

import { UserContext } from "../context/UserContext"



const Header = () => {
    const context = useContext(UserContext)
    const [isOpen , setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar color="info " light  expand="md">

            <NavbarBrand>
            <Link to="/" className="text-white text-decoration-none">
            PG Vasoya GitFire app
            </Link>
            </NavbarBrand>

            <NavbarText className="text-white">
            {
                context.user?.email ? context.user.email: ""
            }
            </NavbarText>


            <NavbarToggler onClick={toggle}/>




            <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar >
                {
                    context.user ? ( 
                    
                    <NavItem>
                        <NavLink
                            tag={Link}
                            onClick={()=>{context.setUser(null)}}
                            to="/"
                        className="text-white text-decoration-none">
                            LogOut 
                        </NavLink>
                    </NavItem> ) : ( 
                    <>
                    <NavItem>
            <NavLink
                    tag={Link}
                    to="/SignIn"
                    
                    className="text-white text-decoration-none">
                    SignIn 
                </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
                    tag={Link}
                    to="/SignUp"
                    
                    className="text-white text-decoration-none">
                    SignUp 
                </NavLink>
            </NavItem>
                    </>
           )
                }
           


            </Nav>
            </Collapse>



        </Navbar>
    )
}


export default Header;