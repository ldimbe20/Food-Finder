import React from "react"
import { Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { Link, useParams } from "react-router-dom"
import { UserRestrictionProfile } from "./userRestriction/UserRestriction"
// import { UserRestrictionForm } from "./userRestriction/UserRestrictionForm"
import { UserRestrictionForm } from "./userRestriction/refactorpractice"
import { Welcome } from "./Welcome";
// import {UserProfiles} from "./userProfiles/UserProfiles"

export const ApplicationViews = () => {
    const history = useHistory()
    return (
        <>

            <Route exact path="/">
                <Welcome />
            </Route>

            <Route path="/restrictions/create">
                <UserRestrictionForm />
            </Route>
            
            <Route path="/restrictions/profiles">
                <UserRestrictionProfile />
            </Route>
           
          
            
        </>
    )
}


