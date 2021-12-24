import React, { useEffect, useState } from "react"
import "./FriendsProfileList.css"

export const FriendProfileList = () => {
    const [friendFoodRestriction, setFriendFoodRestriction] = useState([])
   
    

    useEffect( 
        () => {
            getFriendFoodRestriction()  //function is first argument  and array is second argument
        },  //this is just setting setFriendFoodRestriction but it isn't react to state change
        []
    ) 

    const getFriendFoodRestriction = () => {  //!this is a function is used to set the state of setFriendNameList
        return fetch("http://localhost:8088/friendFoodRestrictions?_expand=friend&_expand=severityLevel")
            .then(res => res.json())
            .then((data) => {
                setFriendFoodRestriction(data)  
            })
    }


    const deleteProfile = (id, friendId) => { //using friendId and id as arguments to be deleted 
        fetch(`http://localhost:8088/friendFoodRestrictions/${id}`, { //gathering info from API
            //from line 52

            method: "DELETE" //deleting that info
        })
            .then  
                (() => { deleteFriend(friendId) })//then running deleteFriend function that deletes the friendId 
            .then
            (() => { getFriendFoodRestriction() }) //replacing information after profile is deleted to reset data
    }      


    
    const deleteFriend = (id) => { 
        fetch(`http://localhost:8088/friends/${id}`, { 
            //from line line 52

            method: "DELETE"
        })
    }


    const loggedIn = parseInt(localStorage.getItem("food_customer")) //! this component is a variable that equals the id of food_customer
    return (
        <>

            {
                friendFoodRestriction.map( //mapping through friendFoodRestrictions and returning a profile for each argument or friend
                    (friend) => {//!this component returns the profile created by user
                    // {loggedIn === friend.friend.userId ?
                        return (loggedIn === friend.friend.userId) ?
                        <div key={`friendFoodRestriction--${friendFoodRestriction.id}`} className="friendList">
                            
                                 <>
                                    <h2 className="name"> {friend?.friend?.name} </h2>
                                    <p className="allergic"><b>Food Allergy: {friend.foodRestrictionName}</b></p>
                                    <p className="severity"> <b>Severity Level: {friend?.severityLevel?.severityLevel}</b></p>
                                    <p className="treatment"> <b>Treatment: {friend?.treatment}</b></p>
                                    <button className="delete"onClick={() => 
                                    {deleteProfile(friend.id, friend.friendId)  // taking the argument of ticket.id and mapping through ticket array to find correct id number to delete
                                    }}>Delete</button>  </>
                                
                        </div>: ""
                    }
                )
            }
        </>
    )
}