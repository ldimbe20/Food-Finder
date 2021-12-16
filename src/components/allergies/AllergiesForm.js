import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"


export const AllergiesForm = () => {   //restrictionForm is a component
    const history = useHistory()


    const [severity, setSeverity] = useState([
    ]
    )

    const [severityId, setSeverityId] = useState ({
        id: 1
    }
    )

    const [friend, setFriend] = useState ({
        id: 1
    }
    )




    const [foodRestrictionName, setfoodRestrictionName] = useState({
        description: ""
    })



    const saveAllergy = (evt) => {  //this function is using the state, useState, to create an object to store to API
        evt.preventDefault()
        const newAllergy = {  //creating an object to save 
            foodRestrictionName: foodRestrictionName.description,  //getting information form state 
            friendId: 1,  //!trying to figure out how to transfer over information from previous form 
            severityId: parseInt(severityId.id)
        } //we want to send above object to API

        const fetchOption = {
            method: "POST", //posting to the API using POst method
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAllergy) // sending the body of the object new foodRestrictionName, can't send javascript so need to stringify 
        }

        return fetch("http://localhost:8088/friendFoodRestrictions", fetchOption)
            .then(response => response.json())
        //     .then (() => {
        //         history.push("/foodRestrictionNames")  
        // })

    }

    useEffect( // a hook whose responsibility it is to react to change state
        () => {
            fetch("http://localhost:8088/severity")
                .then(res => res.json())
                .then((data) => {
                    setSeverity(data)
                })
        },
        [] //
    )

    useEffect( // a hook whose responsibility it is to react to change state
        () => {
            fetch("http://localhost:8088/friend")
                .then(res => res.json())
                .then((data) => {
                    setFriend(data)
                })
        },
        [] //
    )





    return (
        <>
            <form className="allergyForm">
                <h2 className="allergyForm__title">New Service FoodRestrictionName</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="foodName">Type Food Name:</label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Brief description of problem"
                            onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                                (evt) => {
                                    const copy = { ...foodRestrictionName }     //using object spread operator to copy the initual state
                                    copy.description = evt.target.value  //making the new description = the value of someone typing into the description field
                                    setfoodRestrictionName(copy)
                                }
                            } />
                        {/* above isnow that copy is updated with new data it will take that copy to update from useState hook */}
                    </div>
                </fieldset>

                <fieldset>
                    Select Severity Level
                    <select
                        id="Severity--type"
                        className="Severity--type"
                        value={severityId}
                        onChange={
                            (evt) => {
                                const copy = { ...severityId }  //when this is clicked you are making a copy of severityId
                                copy.id = evt.target.value  //you are targeting the id of serverity because copy is mkaing a copy of severity and statin id
                                setSeverityId(copy)
                            }
                        }
                    >
                        <option value="" label="Severity Level of Allergy"></option>
                        {
                            severity.map(
                                (severityLevel) => {
                                    return <option value={severityLevel.id} key={`severityLevel--${severityLevel.id}`}>
                                        {severityLevel.level}
                                    </option>
                                }
                            )
                        }
                    </select>
                </fieldset>



                <button className="btn btn-primary" onClick={saveAllergy}>
                    Submit Food Restriction Name
                </button>
            </form>
        </>
    )
}

{/* // userId: parseInt(localStorage.getItem("food_customer")) */ }