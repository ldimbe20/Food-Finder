import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
       <>
       <ul className="navbar">
            <h2 class="header">FoodFinder</h2>
         

            <li className="navbar__item">
            <Link className="navbar__link" to="/restrictions/create"> Create New Profile </Link>
            </li> 

            <li className="navbar__item">
                <Link className="navbar__link" to="/profileList"> Profiles </Link>
                
            </li> 
            <li className="navbar__item">
                <Link className="navbar__link" to="#"
                onClick = {
                    () => {
                        localStorage.removeItem("food_customer")
                    }
                }>
                Log Out 
                </Link>
            </li> 

           

        </ul>
    </>
    )
}
