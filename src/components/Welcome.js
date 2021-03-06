import React from "react"
import { useHistory } from "react-router-dom"
import "./Welcome.css";

export const Welcome = () => {
    const history = useHistory()
    return (
        <>
            <body className="Image_body">
                <h2>Forbidden Food Finder</h2>
                <h4 className="welcome">Welcome to Forbidden Food Finder
                    where you can see your friendʼs and
                    familyʼs dietary needs.</h4>

                <div className="centerChildren btn--newResource">
                    <button type="button"
                        className="btn btn-success "
                        onClick={() => { history.push("/restrictions/create") }}>
                        Make A New Profile
                    </button>
                </div>

                <div className="centerChildren btn--newResource">
                    <button type="button"
                        className="btn btn-success "
                        onClick={() => { history.push("/profileList") }}>
                        See Profiles
                    </button>
                </div>
            </body>
        </>
    )
}
