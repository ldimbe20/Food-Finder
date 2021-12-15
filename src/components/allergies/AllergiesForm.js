import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"


export const AllergiesForm = () => {   //restrictionForm is a component
    const history = useHistory()


    const [foodRestrictionName, setfoodRestrictionName] = useState({
        userId: parseInt(localStorage.getItem("food_customer"))  //how do I get the friend id
    })




    const saveAllergies = (evt) => {
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

        return fetch("http://localhost:8088/friendFoodRestrictions", fetchOption(foodRestrictionName)) //fetchOption is a function on line 34 which post parameter (foodRestrictionName) to api
            .then(response => response.json())//the response,which is profile name value, is gathered and turned to javascript
            .then((storedResponse) => { //the response is then converted to storedResponse
            })
        .then((data) => {   
                history.push("/profileList")
        }) 
    }

    return (
        <form className="userRestrictionForm">
            <h2 className="userRestrictionForm__title">New Food Restriction Profile</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="friend">List Allergies:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="List Allergies"
                        onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                            (evt) => {
                                const copy = { ...foodRestrictionName }     //using object spread operator to copy the initual state
                                copy.foodRestrictionName = evt.target.value  //making the new description = the value of someone typing into the description field
                                setfoodRestrictionName(copy)
                            }
                        } />
                </div>
            </fieldset>

            <button className="btn btn-primary" onClick={(evt) => saveAllergies(evt)}>
                Save Profile
            </button>
        </form>
    )
}