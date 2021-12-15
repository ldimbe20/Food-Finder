import React from "react"
import { Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { RestrictionForm } from "./Restriction/RestrictionForm"
import { FriendProfile } from "./friends/Friends"
import { FriendProfileList} from "./friends/FriendsProfileList"
import { Welcome } from "./Welcome";


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
             <FriendProfile />
            </Route>

            <Route path="/profileList">  
            {/* {} */}
             <FriendProfileList />
            </Route>
          
            
        </>
    )
}



