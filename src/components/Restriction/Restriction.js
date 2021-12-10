//this module is responsible for diplaying the UserRestriction form
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const RestrictionProfile = () => {
    const [foodRestrictions, setFoodRestrictions] = useState({})  // State variable for current employee object
    const { foodRestrictionsId } = useParams()  // Variable storing the route parameter// look where UserRestriction is invoked for commented code 

    useEffect(
        () => {
            fetch(`http://localhost:8088/userRestrictions/${foodRestrictionsId}?_expand=restrictionProfiles&_expand=foodRestrictions`) //interpolated so the employeeId is recorded
                .then(res => res.json())
                .then(setFoodRestrictions)
        },
        [ foodRestrictionsId ]  // Above function runs when the value of employeeId change, whenever the link is clicked go to line 40 on
        //employeelist.js to see
       

    )

    return (
        <>
            <section className="friendsFoodRestrictions">
                <h3 className="friendsFoodRestrictions__name">{foodRestrictions.foodRestrictionsId?.name}</h3>
                <div className="friendsFoodRestrictions__specailties"> Display here: {foodRestrictions.id}</div>
            </section>
        </>
    )
}

