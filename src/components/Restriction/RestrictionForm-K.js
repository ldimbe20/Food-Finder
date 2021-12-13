import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"



export const RestrictionForm = () => {
    const history = useHistory()
    const [profileName, setProfileName] = useState({
        name: "",
        userId: parseInt(localStorage.getItem("food_customer"))
    })

    const [manualFoodRestriction, setManualFoodRestrictions] = useState({
        name: "",
        manuallyAdded: true,
    })
    

    const [autoFoodCheckboxArray, setAutoFoodCheckboxArray] = useState([])

    

    const [autoFoodRestriction, setAutoFoodRestriction] = useState([{
        name: "",
        manuallyAdded: true,
    }])

     // selectedAutoFoodRestrictions = {
    //     autofoodRestriction: null,
    //     checked: false
    // }



    useEffect(
        () => {
            fetch("http://localhost:8088/foodRestrictions?manuallyAdded=false") //going through foodRestrictions manually added data
                .then(response => response.json()) //grabbing the data and creating new variable response turning to json 
                .then((foodRestrictionArray) => {
                    // setAutoFoodCheckboxArray([])
                    foodRestrictionArray.map(
                        (autoFoodRestriction) => { 
                            const checkedFoodRestriction = {
                                foodRestriction:  autoFoodRestriction,
                                checked: false
                            } 
                            setAutoFoodCheckboxArray(autoFoodCheckboxArray.concat(checkedFoodRestriction)) //setting array to what it was plus the new food restirction value 
                        })   
                     // creating a food restrictions arrray with collected data
                    // setAutoFoodCheckboxArray(foodRestrictionArray) //taking that data and sending to autoFoodRestriction array
                 }) 
                
        },
        []
    )

    const saveFoodRestriction = (evt) => {
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


        return fetch("http://localhost:8088/restrictionsProfiles", fetchOption(profileName)) //fetchOption is a function on line 34 which post parameter (profileName) to api
            .then(response => response.json())//the response,which is profile name value, is gathered and turned to javascript
            .then((storedResponse) => { //the response is then converted to storedResponse

                return fetch("http://localhost:8088/foodRestrictions", fetchOption(manualFoodRestriction)) //this is invoking the fetchOption function with foodrestriction variable
                    .then(response => response.json())
                    .then((data) => {
                                const userRestrictions = {
                                    restrictionsProfileId: storedResponse.id,
                                    foodRestrictionId: data.id
                                }
                                return fetch("http://localhost:8088/userRestrictions", fetchOption(userRestrictions))
                            })
                            .then((data) => {
                                history.push("/profileList")
               
                    })

            })

    }





    return (
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
                                const copy = { ...profileName }     //using object spread operator to copy the initual state
                                copy.name = evt.target.value  //making the new description = the value of someone typing into the description field
                                setProfileName(copy)
                            }
                        } />
                </div>
            </fieldset>

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
                                const copy = { ...manualFoodRestriction }     //using object spread operator to copy the initual state
                                copy.name = evt.target.value  //making the new description = the value of someone typing into the description field
                                setManualFoodRestrictions(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="AutoFoodName">Pick From Common Allergies</label>
                    <div id="selectFromAllergies" className="form-control">{ //flex to put side by side
                        autoFoodCheckboxArray.map(
                            (checkedFoodRestriction) => {
                                return <div key="{checkedFoodRestriction}">
                                    <input type="checkbox" name="{checkedFoodRestriction.foodRestriction.name}" value="false" 
                                        onChange={
                                            (evt) => {
                                                checkedFoodRestriction.checked = evt.target.value 
                                                
                                            }} /> 
                                            {checkedFoodRestriction.foodRestriction.name}
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






