import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"


export const UserRestrictionForm = () => {
    const history = useHistory()
    const [profileName, setProfileName] = useState({
        name: "",
        userId:parseInt(localStorage.getItem("food_customer"))
    })

    const [foodRestriction, setManualFoodeRestrictions] = useState({
        name: "",
        manuallyAdded: true,
    })

    const [autoFoodRestriction, setAutoFoodRestriction] = useState([])
   

    useEffect(
        () => {
            fetch("http://localhost:8088/foodRestrictions?manuallyAdded=false")
                .then(response => response.json())
                .then((foodRestrictionArray) => {
                    setAutoFoodRestriction(foodRestrictionArray)
                })
            },
           [] 
        )

    

    const saveFoodRestriction = (evt) => {  //this function is using the state, useState, to create an object to store to API
        evt.preventDefault()
 //create user profile first

        const fetchOption = {
            method: "POST", //posting to the API using POst method
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profileName) // sending the body of the object new ticket, can't send javascript so need to stringify 
        }

        return fetch("http://localhost:8088/restrictionProfiles", fetchOption)
        .then(response => response.json())
        .then(() => {
             history.push("/profileName")
        })


        // const fetchOption = {
        //     method: "POST", //posting to the API using POst method
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(foodRestriction) // sending the body of the object new ticket, can't send javascript so need to stringify 
        // }


        // return fetch("http://localhost:8088/foodRestrictions", fetchOption)
        //     .then(response => response.json())
        //     .then(() => {
        //         history.push("/foodRestriction")
        //     })

    }





    return (
        <form className="userRestrictionForm">
            <h2 className="userRestrictionForm__title">New Food Restriction Profile</h2>
            
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="manualFoodName">Friend's Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Friends Profile Name"
                        onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                            (evt) => {
                                const copy = { ...profileName}     //using object spread operator to copy the initual state
                                copy.name = evt.target.value  //making the new description = the value of someone typing into the description field
                                setProfileName(copy)
                            }
                        } />    
                </div>
            </fieldset>  */}

            <fieldset>
                <div className="form-group">
                    <label htmlFor="manualFoodName">Manual Food Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="List food that person doesn't like here"
                        onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                            (evt) => {
                                const copy = { ...foodRestriction }     //using object spread operator to copy the initual state
                                copy.name = evt.target.value  //making the new description = the value of someone typing into the description field
                                setManualFoodeRestrictions(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="AutoFoodName">Pick From Common Allergies</label>
                    <div id="selectFromAllergies" className="form-control">{ //flex to put side by side
                        autoFoodRestriction.map(
                            (autoFoodRestriction) => {
                                return <div key ="{autoFoodRestriction}">
                                    <input type="checkbox" name="autoFoodRestriction" value="{autoFoodRestriction.id}"/> {autoFoodRestriction.name}
                                </div>
                            }
                        )
    
                    }   
                    </div>
                </div>


            </fieldset>

            <button className="btn btn-primary" onClick={(evt) => saveFoodRestriction(evt)}>
                Save Profile
            </button>
        </form>
    )
}








