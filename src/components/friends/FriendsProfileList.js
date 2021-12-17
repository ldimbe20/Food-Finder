import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"




export const FriendProfileList = () => {
    const [friendFoodRestriction, setFriendFoodRestriction] = useState([])

   
    

    useEffect( //instead of calling a fetch call to display change here we are invoking the getTickets function which does it for us 
        () => {
            getFriendFoodRestriction()
        },
        []
    ) //invoking getTickets 

    const getFriendFoodRestriction = () => {  //this function is used to replace data information after ticket has been deleted
        return fetch("http://localhost:8088/friendFoodRestrictions?_expand=severity&_expand=friend")
            .then(res => res.json())
            .then((data) => {
                setFriendFoodRestriction(data)
            })
    }

    const deleteFriend = (id) => { //in order to delete ticket you need to know what ticket to be deleted so you use id
        //this matches what is interpolated on line 23
        fetch(`http://localhost:8088/friendFoodRestrictions/${id}`, { 
            //from line line 52

            method: "DELETE"
        })
            .then
            (() => { getFriendFoodRestriction() }) //replacing information after ticket entry is deleted
    }


