import React from "react"
import { Route } from "react-router-dom"
import UserRestrictionForm from "./userRestriction/UserRestrictionForm"
import { useHistory } from "react-router-dom"


export default () => {
    return (
        <>
            {/* <Route exact path="/animals">
                <AnimalListComponent />
            </Route>
            <Route path="/animals/:animalId(\d+)">
                <Animal />
            </Route> */}
            <Route path="/foodrestriction/new">
                <UserRestrictionForm />
            </Route>
        </>
    )
}