import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"



export const RestrictionForm = () => {
    const history = useHistory()
    const [profileName, setProfileName] = useState({
        name: "",
        userId: parseInt(localStorage.getItem("food_customer"))
    })

    const [foodRestriction, setManualFoodRestrictions] = useState({
        name: "",
        manuallyAdded: true,
    })
    

    const [autoFoodRestrictionArray, setAutoFoodRestrictionArray] = useState([])

    

    const [autoFoodRestriction, setAutoFoodRestriction] = useState([{
        name: "",
        manuallyAdded: false
    }])

    // selectedAutoFoodRestrictions = {
    //     autofoodRestriction: null,
    //     checked: false
    // }



    useEffect(
        () => {
            fetch("http://localhost:8088/foodRestrictions?manuallyAdded=false")
                .then(response => response.json())
                .then((foodRestrictionArray) => {
                    setAutoFoodRestrictionArray(foodRestrictionArray)
                    // foodRestrictionArray.map( //mapping through food restrictions and for each food restriction creating an autofoodRestriction that has checkbox
                    //     (foodRestriction) => {
                    //         const autoFoodRestriction = {
                    //             id: foodRestriction.id,
                    //             name: foodRestriction.name,
                    //             manuallyAdded: false,
                    //             checked: false
                    //         }
                    //         setAutoFoodRestrictionArray(autoFoodRestrictionArray.concat(autoFoodRestriction))
                    //     }    //concat is creating a new array and setting it to setAutoFoodRestriction array
                    // )
                })
        },
        []
    )

    //! want to grab just the array of autoFoods-
    //! also want to post the state of autofoods


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


        return fetch("http://localhost:8088/restrictionProfiles", fetchOption(profileName)) //fetchOption is a function on line 34 which post parameter (profileName) to api
            .then(response => response.json())//the response,which is profile name value, is gathered and turned to javascript
            .then((storedResponse) => { //the response is then converted to storedResponse

                return fetch("http://localhost:8088/foodRestrictions", fetchOption(foodRestriction)) //this is invoking the fetchOption function with foodrestriction variable
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
                                const copy = { ...foodRestriction }     //using object spread operator to copy the initual state
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
                        autoFoodRestrictionArray.map(
                            (autoFoodRestriction) => {
                                return <div key="{autoFoodRestriction}">
                                    <input type="checkbox" name="autoFoodRestriction" value="{autoFoodRestriction.id}"
                                        onChange={
                                            (evt) => {
                                                const copy = { ...autoFoodRestriction }     //using object spread operator to copy the initual state
                                                copy.name = evt.target.checked  //making the new description = the value of someone checking box
                                                setAutoFoodRestriction(copy)

                                            }} /> {autoFoodRestriction.name}
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







import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"



export const RestrictionForm = () => {
    const history = useHistory()
    const [profileName, setProfileName] = useState({
        name: "",
        userId: parseInt(localStorage.getItem("food_customer"))
    })

    const [foodRestriction, setManualFoodRestrictions] = useState({
        name: "",
        manuallyAdded: true,
    })
    

    const [autoFoodRestrictionArray, setAutoFoodRestrictionArray] = useState([])

    

    const [autoFoodRestriction, setAutoFoodRestriction] = useState([{
        name: "",
        manuallyAdded: false
    }])

    // selectedAutoFoodRestrictions = {
    //     autofoodRestriction: null,
    //     checked: false
    // }



    useEffect(
        () => {
            fetch("http://localhost:8088/foodRestrictions?manuallyAdded=false")
                .then(response => response.json())
                .then((foodRestrictionArray) => {
                    setAutoFoodRestrictionArray(foodRestrictionArray)
                    // foodRestrictionArray.map( //mapping through food restrictions and for each food restriction creating an autofoodRestriction that has checkbox
                    //     (foodRestriction) => {
                    //         const autoFoodRestriction = {
                    //             id: foodRestriction.id,
                    //             name: foodRestriction.name,
                    //             manuallyAdded: false,
                    //             checked: false
                    //         }
                    //         setAutoFoodRestrictionArray(autoFoodRestrictionArray.concat(autoFoodRestriction))
                    //     }    //concat is creating a new array and setting it to setAutoFoodRestriction array
                    // )
                })
        },
        []
    )

    //! want to grab just the array of autoFoods-
    //! also want to post the state of autofoods


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


        return fetch("http://localhost:8088/restrictionProfiles", fetchOption(profileName)) //fetchOption is a function on line 34 which post parameter (profileName) to api
            .then(response => response.json())//the response,which is profile name value, is gathered and turned to javascript
            .then((storedResponse) => { //the response is then converted to storedResponse

                return fetch("http://localhost:8088/foodRestrictions", fetchOption(foodRestriction)) //this is invoking the fetchOption function with foodrestriction variable
                    .then(response => response.json())
                    .then((data) => {

                        return fetch("http://localhost:8088/foodRestrictions?manuallyAdded=false", fetchOption(autoFoodRestriction)) //this is invoking the fetchOption function with foodrestriction variable
                            .then(response => response.json())
                            .then((newdata) => {
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
                                const copy = { ...foodRestriction }     //using object spread operator to copy the initual state
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
                        autoFoodRestrictionArray.map(
                            (autoFoodRestriction) => {
                                return <div key="{autoFoodRestriction}">
                                    <input type="checkbox" name="autoFoodRestriction" value="{autoFoodRestriction.id}"
                                        onChange={
                                            (evt) => {
                                                const copy = { ...autoFoodRestriction }     //using object spread operator to copy the initual state
                                                copy.name = evt.target.checked  //making the new description = the value of someone checking box
                                                setAutoFoodRestriction(copy)

                                            }} /> {autoFoodRestriction.name}
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







