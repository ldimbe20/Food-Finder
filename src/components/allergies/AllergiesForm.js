import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./AllergiesForm.css";


export const AllergiesForm = () => {   //AllergyForm is a component that renders html
    const history = useHistory()
    const [severity, setSeverity] = useState([]) 
    const [severityId, setSeverityId] = useState ({})
    const [friends, setFriends] = useState ([])
    const [foodRestrictionName, setfoodRestrictionName] = useState({
    description: ""})



    const saveAllergy = (evt) => {  //this function is using the state, useState, to create an object to store to API
        evt.preventDefault()
        const newAllergy = {  //creating an object to save 
            foodRestrictionName: foodRestrictionName.description,  //getting information form state 
            friendId: friends.pop().id,   
            severityId: parseInt(severityId.id)
        } //we want to send above object to API
        
        // const friendId = friends.pop() 

        const fetchOption = {
            method: "POST", //posting to the API using Post method
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAllergy) // sending the body of the object new foodRestrictionName, can't send javascript so need to stringify 
        }

        return fetch("http://localhost:8088/friendFoodRestrictions", fetchOption)
            .then(response => response.json())
            .then (() => {
                history.push("/profileList")  //changed the url to direct to profileList
        })

    }

    useEffect( // a hook whose responsibility it is to react to change state
        () => {
            fetch("http://localhost:8088/severityLevels")
                .then(res => res.json())
                .then((data) => {
                    setSeverity(data) //taking data as argument
                })
        },
        [] //
    )

    useEffect( // a hook whose responsibility it is to react to change state
        () => {
            fetch("http://localhost:8088/friends")
                .then(res => res.json())
                .then((data) => {
                    setFriends(data)
                })
        },
        [] //
    )



    return (
        <>
            <form className="allergyForm">
                <h2 className="allergyForm__title">Food Restriction Name</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="foodName">Food Restriction Name:</label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Add food name here "
                            onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                                (evt) => {
                                    const copy = { ...foodRestrictionName }     //using object spread operator to copy the initual state
                                    copy.description = evt.target.value  //making the new description = the value of someone typing into the description field
                                    setfoodRestrictionName(copy)
                                }
                            } />
                        
                    </div>
                </fieldset>

                <fieldset className="dropdown">
                   <p className="select"> Select Severity Level </p>
                    <select id="Severity--type" className="Severity--type"
                        onChange={
                            (evt) => {
                                const copy = { ...severityId }  //when this is clicked you are making a copy of severityId
                                copy.id = evt.target.value  //you are targeting the id of serverity because copy is mkaing a copy of severity and statin id
                                setSeverityId(copy)
                            }}>   
                        <option value="0" label="Severity Level of Allergy"></option>
                        {
                            severity.map( //iterating through severity array, going through each object in array
                                (severityLevel) => {
                                    return <option value={severityLevel.id} key={`severityLevel--${severityLevel.id}`}>
                                           {severityLevel.severityLevel}
                                           </option>
                                } 
                            )
                        }
                    </select>
                </fieldset>

                <button className="SaveAllergy" onClick={saveAllergy}>
                    Submit Food Restriction Name
                </button>
            </form>
        </>
    )
}
