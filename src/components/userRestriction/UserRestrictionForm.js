//this module is responsible for gathering information needed for form
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const UserRestrictionForm = () => {
    const [foodRestriction, set] = useState({})  // State variable for current foodRestriction object
    const { foodRestrictionId } = useParams()  // Variable storing the route parameter// look where FoodRestriction is invoked for commented code 

    useEffect(
        () => {
            fetch(`http://localhost:8088/foodRestrictions/${foodRestrictionId}`) //interpolated so the foodRestrictionId is recorded
                .then(res => res.json())
                .then(set)
        },
        [ foodRestrictionId ]  // Above function runs when the value of employeeId change, whenever the link is clicked go to line 40 on
        //employeelist.js to see
       

    )

    return (
        <>
            <section className="foodRestriction">
                <h3 className="foodRestriction__name">{foodRestriction.name} || "unknown"</h3>
                
            </section>
        </>
    )
}


