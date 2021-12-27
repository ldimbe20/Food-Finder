import React, { useEffect, useState } from "react"
import "./SeverityLevel.css"



export const Severities = () => {
    // const [friendFoodRestriction, setfriendFoodRestriction] = useState([]) 
    // const [totalSeverityMessage, UpdateSeverityMessage] = useState ("")



    // useEffect( // a hook whose responsibility it is to react to change state
    //     () => {
    //         fetch("http://localhost:8088/friendFoodRestrictions?_expand=friend&_expand=severityLevel")
    //             .then(res => res.json())
    //             .then((data) => {
    //                 setfriendFoodRestriction(data) //taking data as argument
    //             })
    //     },
    //     [] //
    // )

    // useEffect( // a hook whose responsibility it is to react to change state
    //     () => {
    //         if(friendFoodRestriction.severityLevelId === 4){
    //             UpdateSeverityMessage("Ten people have this allergy")
    //             // UpdateSeverityMessage(`${friendFoodRestriction?.friend.name} have this allergy level`)
    //         }

    //     }
                
    //     ,
    //     [friendFoodRestriction] //
    // )


    // const loggedIn = parseInt(localStorage.getItem("food_customer"))
//     return (
//         <>

//             {
//                 friendFoodRestriction.map( //mapping through friendFoodRestrictions and returning a profile for each argument or friend
//                     (friend) => {//!this component returns the profile created by user

//                         return <div key={`friendFoodRestriction--${friendFoodRestriction.id}`} className="friendList">
//                              <>
//                                     <h2 className="name"> {totalSeverityMessage} hey I work</h2>
                                   
//                                       </>
                               

//                         </div>
//                     }
//                 )
//             }
//         </>
//     )
// }





    return (
        <>
        <div className="Source">
            <h2 className="Header">Allergy Severity Levels</h2>
            <div className="Severities">
                <h3 className="Level"><b>Level 1</b></h3>
                <p className ="Description">Tingling or itching in the mouth
                    Swelling of the lips, face, tongue.
                    Wheezing, nasal congestion or trouble breathing</p>
                
                <h4 className="Treatment">Treatment:</h4>
                <p className ="Description">Use common allergy medicines such as benedryl, antihistamines, adrenaline </p>
             </div>
             <div className="Severities">
                <h3 className="Level"><b>Level 2</b></h3>
                <p className ="Description">Intense itching, skin rashes, skin irritations, tingling or itching in the mouth
                    Swelling of the lips, face, tongue.</p>
                <h4 className="Treatment">Treatment:</h4>
                <p className ="Description">Use common allergy medicines such as benedryl, antihistamines, adrenaline </p>
            </div>
            <div className="Severities">
                <h3 className="Level"><b>Level 3</b></h3>
                <p className ="Description">
                    Hives, itching or eczema. Swelling of the lips, face, tongue and throat or other parts of the body
                    Wheezing, nasal congestion or trouble breathing</p>
                <h4 className="Treatment">Treatment:</h4>
                <p className ="Description">Depending on severity use epinephrine. This medicine is injected under the skin or into the muscle of your outer thigh only. Do not inject this medicine into a vein, into the muscle of your buttocks, or into your fingers, toes, hands, or feet. To do so, may increase the chance of having serious side effects </p>
            </div>
             <div className="Severities">
                <h3 className="Level"><b>Level 4</b></h3>
                <p className ="Description"> Wheezing, nasal congestion and inability to breath or trouble breathing</p>
                <h4 className="Treatment">Treatment:</h4>
                <p className ="Description">Use Epinephrine injection. This medicine is injected under the skin or into the muscle of your outer thigh only. Do not inject this medicine into a vein, into the muscle of your buttocks, or into your fingers, toes, hands, or feet. To do so, may increase the chance of having serious side effects </p>
            </div>
       </div>
     </>
    )
}