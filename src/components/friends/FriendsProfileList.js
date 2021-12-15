import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"


export const FriendProfileList = () => {
    const [friends, setFriends] = useState([])
    const history = useHistory()

    useEffect( //instead of calling a fetch call to display change here we are invoking the getTickets function which does it for us 
        () => {
            getFriends()
        },
        []
    ) //invoking getTickets 

    const getFriends = () => {  //this function is used to replace data information after ticket has been deleted
        return fetch("http://localhost:8088/friendFoodRestrictions?_expand=friends&_expand=foodRestriction")
            .then(res => res.json())
            .then((data) => {
                setFriends(data)
            })
    }

    const deleteFriend = (id) => { //in order to delete ticket you need to know what ticket to be deleted so you use id
        //this matches what is interpolated on line 23
        fetch(`http://localhost:8088/friendFoodRestrictions/${id}`, { //you are interpolating ${id} because it is that specific id that will be deleted
            //from line line 52

            method: "DELETE"
        })
            .then
            (() => { getFriends() }) //replacing information after ticket entry is deleted
    }



    return (
        <>
 
            {
                friends.map(
                    (friend) => {
                        return <div key={`friend--${friend.id}`}>
                                {/* above states if className is emergency is friend.emergy is true and is friend if friend.emergency is false */}
                                <h4> {friend.restrictionsProfile.name} 
                                </h4>
                                
                                <h4> Doesn't Like: {friend.foodRestriction.name} 
                                </h4>

                                <i> PLACE HOLDER for checkboxed foods
                                </i>
                                <br />
                                <button onClick={() => {
                                    deleteFriend(friend.id)  // taking the argument of ticket.id and mapping through ticket array to find correct id number to delete
                                }}>Delete</button>
                            </div>
                    }
                )
            }
        </>
    )
}