import React from "react"
import { Route } from "react-router-dom"
import UserRestrictionForm from "./userRestriction/UserRestrictionForm"



export default () => {
    return (
        <>
           
            <Route path="/foodrestriction/new">
                <UserRestrictionForm />
            </Route>
        </>
    )
}