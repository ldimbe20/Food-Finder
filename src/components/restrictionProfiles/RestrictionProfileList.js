import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"


export const RestrictionProfileList = () => {
    const [profiles, setProfiles] = useState([])
    const history = useHistory()

    useEffect( //instead of calling a fetch call to display change here we are invoking the getTickets function which does it for us 
        () => {
            getProfiles()
        },
        []
    ) //invoking getTickets 

    const getProfiles = () => {  //this function is used to replace data information after ticket has been deleted
        return fetch("http://localhost:8088/userRestrictions?_expand=foodRestriction")
            .then(res => res.json())
            .then((data) => {
                setProfiles(data)
            })
    }

    const deleteProfile = (id) => { //in order to delete ticket you need to know what ticket to be deleted so you use id
        //this matches what is interpolated on line 23
        fetch(`http://localhost:8088/userRestrictions/${id}`, { //you are interpolating ${id} because it is that specific id that will be deleted
            //from line line 52

            method: "DELETE"
        })
            .then
            (() => { getProfiles() }) //replacing information after ticket entry is deleted
    }



    return (
        <>
 
            {
                profiles.map(
                    (profile) => {
                        return <div key={`profile--${profile.id}`}>
                                {/* above states if className is emergency is profile.emergy is true and is profile if profile.emergency is false */}
                                <p> This should be their name {profile.foodRestriction.name} 
                                </p>
                                
                                <p> Doesn't Like {profile.foodRestriction.name} 
                                </p>

                                <p> they are allergic to {profile.foodRestriction.name} 
                                </p>
                                <button onClick={() => {
                                    deleteProfile(profile.id)  // taking the argument of ticket.id and mapping through ticket array to find correct id number to delete
                                }}>Delete</button>
                            </div>
                    }
                )
            }
        </>
    )
}