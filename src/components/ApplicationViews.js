import React from "react"
import { Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { Link, useParams } from "react-router-dom"
import {UserRestrictionForm} from "./userRestriction/UserRestrictionForm"
// import {UserProfiles} from "./userProfiles/UserProfiles"

export const ApplicationViews = () => {
    const history = useHistory()
    return (
        <> 
            <h4>Welcome to Forbidden Food Finder
where you can sort through your friends and
familyʼs dietary needs.</h4>
           

            
            <div className="centerChildren btn--newResource">
                            <button type="button"
                                className="btn btn-success "
                                onClick={() => { history.push("/restrictions/create") }}>
                                Let's Get Started
                            </button>
                        </div>
             <div className="centerChildren btn--newResource">
                            <button type="button"
                                className="btn btn-success "
                                onClick={() => { history.push("/restrictions/create") }}>
                                View Past Profiles
                            </button>
                        </div>
            

            <Route path="/restrictions/create">
                <UserRestrictionForm />
            </Route>
            
            {/* <Route path="/restrictions/profiles">
                <UserProfiles />
            </Route> */}
          
            
        </>
    )
}


