import React from "react"
import { Route } from "react-router-dom"
import { useHistory } from "react-router-dom"



export const LandingPage = () => {
    const history = useHistory()
    return (
        <> 
           <h4>Welcome to Forbidden Food Finder
where you can sort through your friendʼs and
familyʼs dietary needs.</h4>
           

            
            <div className="centerChildren btn--newResource">
                            <button type="button"
                                className="btn btn-success "
                                onClick={() => { history.push("/foodrestriction/new") }}>
                                Let's Get Started
                            </button>
                        </div>

            <button>See Past Profile Pages</button>

            
            
        </>
    )
}
