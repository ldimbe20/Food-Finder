import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"


export const FriendForm = () => {   //restrictionForm is a component
    const history = useHistory()


    const [friendName, setFriendName] = useState({
        name: "",
        userId: parseInt(localStorage.getItem("food_customer"))
    })
   



    const saveName = (evt) => {
        evt.preventDefault()
        const fetchOption = (parameter) => {
            return {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(parameter)
            }
        }

        return fetch("http://localhost:8088/friends", fetchOption(friendName)) //fetchOption is a function on line 34 which post parameter (friendName) to api
            .then(response => response.json())//the response,which is profile name value, is gathered and turned to javascript
            .then((storedResponse) => { //the response is then converted to storedResponse
            })
        .then((data) => {   
                history.push("/allergies")
        }) 
    }

    return (
        <>
        <form className="userRestrictionForm">
            <h2 className="userRestrictionForm__title">New Food Restriction Profile</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="friend">Friend's Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Friends Profile Name"
                        onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                            (evt) => {
                                const copy = { ...friendName }     //using object spread operator to copy the initual state
                                copy.name = evt.target.value  //making the new description = the value of someone typing into the description field
                                setFriendName(copy)
                            }
                        } />
                </div>
            </fieldset>

            <button className="btn btn-primary" onClick={(evt) => saveName(evt)}>
                Save Profile
            </button>
        </form>
     </>
    )
}