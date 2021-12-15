import React from "react"
import { Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { FriendForm } from "./friends/FriendForm"
import { FriendProfile } from "./friends/Friends"
import { FriendProfileList} from "./friends/FriendsProfileList"
import { Welcome } from "./Welcome";
import { AllergiesForm } from "./allergies/AllergiesForm"


export const ApplicationViews = () => {
    const history = useHistory()
    return (
        <>

            <Route exact path="/"> 
                <Welcome />
            </Route>

            <Route path="/restrictions/create">
                <FriendForm />
            </Route>

            <Route path="/allergies">
                <AllergiesForm />
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



