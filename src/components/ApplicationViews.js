import React from "react"
import { Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { RestrictionForm } from "./Restriction/RestrictionForm"
import { RestrictionProfile } from "./restrictionProfiles/RestrictionProfile"
import { RestrictionProfileList} from "./restrictionProfiles/RestrictionProfileList"
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
                <RestrictionForm />
            </Route>
            
            <Route path="/restrictions/:foodRestrictionsId(\d+)">  
            {/* {} */}
             <RestrictionProfile />
            </Route>

            <Route path="/profileList">  
            {/* {} */}
             <RestrictionProfileList />
            </Route>
          
            
        </>
    )
}



