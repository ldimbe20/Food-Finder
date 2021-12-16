import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"




export const FriendProfileList = () => {
    const [friends, setFriends] = useState([])
    

    useEffect( //instead of calling a fetch call to display change here we are invoking the getTickets function which does it for us 
        () => {
            getFriends()
        },
        []
    ) //invoking getTickets 

    const getFriends = () => {  //this function is used to replace data information after ticket has been deleted
        return fetch("http://localhost:8088/friendFoodRestrictions?_expand=severity&_expand=friend")
            .then(res => res.json())
            .then((data) => {
                setFriends(data)
            })
    }

    return (
        <>
 
            {
                friends.map(
                    (friend) => {

                        <h1>THis is the friends profile list</h1>
                        return <div key={`friend--${friend.id}`}>
                                {/* above states if className is emergency is friend.emergy is true and is friend if friend.emergency is false */}
                                <h4> {friend?.friend?.name} 
                                </h4>
                                <p>is allergic to {friend.foodRestrictionName}</p>
                                <p>Her allergic reaction is {friend?.severity?.level}</p>
                                
                            </div>
                    }
                )
            }
        </>
    )
}
