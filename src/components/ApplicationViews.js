import React from "react"
import { Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { NameForm } from "./Name/NameForm"
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
                <NameForm />
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



