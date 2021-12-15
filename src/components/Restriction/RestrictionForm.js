import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

//!restrictionForm is a component

export const RestrictionForm = () => {   //restrictionForm is a component
    const history = useHistory()


    const [friendName, setFriendName] = useState({
        name: "",
        userId: parseInt(localStorage.getItem("food_customer"))
    })

    const [manualFood, setManualFood] = useState({
        name: "",
        manuallyAdded: true,
    })


    const [foodArray, setFoodArray] = useState([]) //this is array to iterate through checkbox options

    // const [food, setFood] = useState({  //need to make a fetch call to declare food
    //     name: "",
    //     manuallyAdded: true,
    // })    //useState to store checkFood object information

    const [choiceFood, setChoiceFood] = useState({ //useState to store the id of chosen checked food
        chosenFood: new Set()
    })

    const setChosenFood = (id) => {
        // Does the set contain the id?
        // Ternary statement
        const copy = { ...choiceFood }
        copy.chosenFood.has(id)
            ? copy.chosenFood.delete(id)  // Yes? Remove it
            : copy.chosenFood.add(id)
        setChoiceFood(copy)   // No? Add it  //!is setChoiceFood invoking copy? what is this called?
    }


    useEffect(
        () => {
            fetch("http://localhost:8088/foodRestrictions?manuallyAdded=false")
                .then(response => response.json())  //! what would you call the response
                .then((foodRestrictionArray) => {
                    setFoodArray(foodRestrictionArray) //!is this invoking a setFoodArray
                })
        },
        [] //grabbing data from useEffect for iteration of foodrestriction array
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



        return fetch("http://localhost:8088/friends", fetchOption(friendName)) //fetchOption is a function on line 34 which post parameter (friendName) to api
            .then(response => response.json())//the response,which is profile name value, is gathered and turned to javascript
            .then((storedResponse) => { //the response is then converted to storedResponse
  
         //might need ternary to chcek if manual verses not if they did run this then if not 

                return fetch("http://localhost:8088/foodRestrictions", fetchOption(manualFood)) //this is invoking the fetchOption function with foodrestriction variable
                    .then(response => response.json())
                    .then((data) => {
                        const friendFoodRestrictions = {
                            friendId: storedResponse.id,
                            foodRestrictionId: data.id
                        }
                        return fetch("http://localhost:8088/friendFoodRestrictions", fetchOption(friendFoodRestrictions))
                    })
          
          
                    .then(() => {
                        const fetchArray = []
                        // fetchArray - new array for all promises 
                        // posting each choice in the chosenfood set 
                        choiceFood.chosenFood.forEach(  //for each foodChoiceId we are going to post the new friendFoodRestriction options
                            (choiceFoodId) => {
                                /// pushing a promise to fetchArray
                                fetchArray.push(
                                    fetch("http://localhost:8088/friendFoodRestrictions", { //sending this object to food restrictions
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            // choiceFoodId - Id in the new set() 
                                            foodRestrictionId: choiceFoodId,
                                            friendId: storedResponse.id
                                        })
                                    })
                                )
                                
                                //! would I need a return fetch call or is fetch array promise good enough
                                // This is where all the fetches (Promises) all run and resolve
                                Promise.all(fetchArray)
                                    .then(
                                        () => {
                                            // remove all choices
                                            choiceFood.chosenFood.clear()
                                        }
                                    )
                            }
                        )
                        // return fetch("http://localhost:8088/friendFoodRestrictions", fetchOption(friendFoodRestrictions))
                    })

                .then((data) => {   //!why is this data never read
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
                                const copy = { ...friendName }     //using object spread operator to copy the initual state
                                copy.name = evt.target.value  //making the new description = the value of someone typing into the description field
                                setFriendName(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="typedFoodName">Manual Food Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="List food that person doesn't like here"
                        onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                            (evt) => {
                                const copy = { ...manualFood }     //using object spread operator to copy the initual state
                                copy.name = evt.target.value  //making the new description = the value of someone typing into the description field
                                setManualFood(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="AutoFoodName">Pick From Common Allergies</label>
                    <div id="selectFromAllergies" className="form-control">
                        {foodArray.map(
                            (food) => {
                                return <div key="{food}">
                                    <input type="checkbox" name="foodArray" value={foodArray}
                                        onChange={
                                            (evt) => {
                                                setChosenFood(food.id)

                                            }

                                        } /> {food.name}
                                </div>
                            })
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