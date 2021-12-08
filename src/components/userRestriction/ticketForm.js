import React, { useState } from "react"
import { useHistory } from "react-router-dom"


export const TicketForm = () => {
    
    const [foodRestriction, setFoodRestriction] = useState({
        name:"",
        manuallyAdded:false,
    })

    const history =  useHistory() //creating a variable that equals the return of useHistory

    const saveFoodRestriction = (evt) => {  //this function is using the state, useState, to create an object to store to API
        evt.preventDefault()
        const newRestriction ={  //creating an object to save 
            name: foodRestriction.name,  //getting information form state 
            manuallyAdded: foodRestriction.manualAdded
        }
           
   const fetchOption = {
            method: "POST", //posting to the API using POst method
            headers: {
                "Content-Type": "application/json" 
           },
           body:JSON.stringify(newRestriction) // sending the body of the object new ticket, can't send javascript so need to stringify 
        }

         return fetch ("http://localhost:8088/foodRestrictions", fetchOption)
            .then(response => response.json())
            .then (() => {
                history.push("/foodRestriction")  
        })

   }
   
   
    


    return (
        <form className="userRestrictionForm">
            <h2 className="userRestrictionForm__title">New Food Restriction Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manualFoodName">Manual Food Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="List food that person doesn't like here"
                         onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                             (evt) =>{
                                 const copy ={...foodRestriction}     //using object spread operator to copy the initual state
                                 copy.description = evt.target.value  //making the new description = the value of someone typing into the description field
                                 setFoodRestriction(copy)}      
                         }/>
                         {/* above isnow that copy is updated with new data it will take that copy to update from useState hook */}
                </div>
            </fieldset>
        
            <button className="btn btn-primary" onClick={saveFoodRestriction}>
                Save Profile
            </button>
        </form>
    )
}
