import React from "react"
import { Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { UserRestrictionProfile } from "./Restriction/Restriction"
import { UserRestrictionForm } from "./Restriction/RestrictionForm"





export const Welcome = () => {
    const history = useHistory()
    return (
        <> 
         <h2>Forbidden Food Finder</h2>
         <h4>Welcome to Forbidden Food Finder
        where you can sort through your friendʼs and
        familyʼs dietary needs.</h4>
           

            
                     <div className="centerChildren btn--newResource">
                            <button type="button"
                                className="btn btn-success "
                                onClick={() => { history.push("/restrictions/create") }}>
                                Let's Get Started
                            </button>
                    </div>

     
            
        </>
    )
}
