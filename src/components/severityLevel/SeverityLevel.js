import React, { useEffect, useState } from "react"
import "./SeverityLevel.css"



export const Severities = () => {
    const [friendFoodRestriction, setfriendFoodRestriction] = useState([]) 
    const [totalSeverityMessage, UpdateSeverityMessage] = useState ("")
    const [totalSeverityMessageThree, UpdateSeverityMessageThree] = useState ("")
    const [totalSeverityMessageTwo, UpdateSeverityMessageTwo] = useState ("")
    const [totalSeverityMessageOne, UpdateSeverityMessageOne] = useState ("")



    useEffect( // Getting data used to set severity level in next useEffect
        () => {
            fetch("http://localhost:8088/friendFoodRestrictions?_expand=friend&_expand=severityLevel")
                .then(res => res.json())
                .then((data) => {
                    setfriendFoodRestriction(data) //taking data as argument
                })
        },
        [] //
    )

    useEffect(
        () => {
            friendFoodRestriction.map((friend) => {
                if (friend.severityLevelId === 4) {
                    UpdateSeverityMessage(`This allergy severity level affects ${friend.friend.name}`)
                }

            })

        },
        [friendFoodRestriction] //
    )

    useEffect(
        () => {
            friendFoodRestriction.map((friend) => {
                if (friend.severityLevelId === 3) {
                    UpdateSeverityMessageThree(`This allergy severity level affects ${friend.friend.name}`)
                }

            })

        },
        [friendFoodRestriction] //
    )

    useEffect(
        () => {
            friendFoodRestriction.map((friend) => {
                if (friend.severityLevelId === 2) {
                    UpdateSeverityMessageTwo(`This allergy severity level affects ${friend.friend.name}`)
                }

            })

        },
        [friendFoodRestriction] //
    )


    useEffect(
        () => {
            friendFoodRestriction.map((friend) => {
                if (friend.severityLevelId === 1) {
                    UpdateSeverityMessageOne(`This allergy severity level affects ${friend.friend.name}`)
                }

            })

        },
        [friendFoodRestriction] //
    )



    const loggedIn = parseInt(localStorage.getItem("food_customer"))
    return (
         <>
          
                <div className="Source">
                    <>
                    <h2 className="Header">Allergy Severity Levels</h2>
                    <div className="Severities">
                        <h3 className="Level"><b>Level 1</b></h3>
                        <p className ="Description">Tingling or itching in the mouth
                            Swelling of the lips, face, tongue.
                            Wheezing, nasal congestion or trouble breathing</p>
                        <h4 className="Treatment">Treatment:</h4>
                        <p className ="Description">Use common allergy medicines such as benedryl, antihistamines, adrenaline </p>
                        {/* <p className ="people__Allergy">{totalSeverityMessageOne} </p> */}
                    </div>
                    <div className="Severities">
                        <h3 className="Level"><b>Level 2</b></h3>
                        <p className ="Description">Intense itching, skin rashes, skin irritations, tingling or itching in the mouth
                            Swelling of the lips, face, tongue.</p>
                        <h4 className="Treatment">Treatment:</h4>
                        <p className ="Description">Use common allergy medicines such as benedryl, antihistamines, adrenaline </p>
                        {/* <p className ="people__Allergy">{totalSeverityMessageTwo} </p> */}
                    </div>
                    <div className="Severities">
                        <h3 className="Level"><b>Level 3</b></h3>
                        <p className ="Description">
                            Hives, itching or eczema. Swelling of the lips, face, tongue and throat or other parts of the body
                            Wheezing, nasal congestion or trouble breathing</p>
                        <h4 className="Treatment">Treatment:</h4>
                        <p className ="Description">Depending on severity use epinephrine. This medicine is injected under the skin or into the muscle of your outer thigh only. Do not inject this medicine into a vein, into the muscle of your buttocks, or into your fingers, toes, hands, or feet. To do so, may increase the chance of having serious side effects </p>
                        {/* <p className ="people__Allergy">{totalSeverityMessageThree} </p> */}
                    </div>
                    <div className="Severities">
                        <h3 className="Level"><b>Level 4</b></h3>
                        <p className ="Description"> Wheezing, nasal congestion and inability to breath or trouble breathing</p>
                        <h4 className="Treatment">Treatment:</h4>
                        <p className ="Description">Use Epinephrine injection. This medicine is injected under the skin or into the muscle of your outer thigh only. Do not inject this medicine into a vein, into the muscle of your buttocks, or into your fingers, toes, hands, or feet. To do so, may increase the chance of having serious side effects </p>
                        {/* <p className ="people__Allergy">{totalSeverityMessage} </p> */}
                    </div>
                    </>
            </div>: ""       
            
       
        </>
    )

 }






//     const loggedIn = parseInt(localStorage.getItem("food_customer"))
//         return (
//             <>
//             {
//                 friendFoodRestriction.map( 
//                     (friend) => {
//                         if(loggedIn === friend.friend.userId) {
//                             if(friend.severityLevelId === 4){
//                                 return (
//                                     <div className="Source">
//                                         <>  
//                                             <p className ="people__Allergy"> Allergy Level 4 
//                                             {totalSeverityMessage} </p>
//                                         </>
//                                     </div>   
//                                 )}
//                                 else if(friend.severityLevelId === 3){
//                                     return (
//                                         <div className="Source">
//                                             <>  
//                                                 <p className ="people__Allergy"> Allergy Level 3 
//                                                 {totalSeverityMessageThree} </p>
//                                             </>
//                                         </div>   
//                                     )}
//                                  else if(friend.severityLevelId === 2){
//                                         return (
//                                             <div className="Source">
//                                                 <>  
//                                                     <h3 className ="people__AllergyH3"> Allergy Level 2 </h3>
//                                                     <p className ="Description">
//                                                    Hives, itching or eczema. Swelling of the lips, face, tongue and throat or other parts of the body
//                                                    Wheezing, nasal congestion or trouble breathing</p>
//                                                   <h4 className="Treatment">Treatment:</h4>
//                                                  <p className ="Description">Depending on severity use epinephrine. This medicine is injected under the skin or into the muscle of your outer thigh only. Do not inject this medicine into a vein, into the muscle of your buttocks, or into your fingers, toes, hands, or feet. To do so, may increase the chance of having serious side effects </p>
//                                                     <p className ="people__Allergy">{totalSeverityMessageTwo} </p>
//                                                 </>
//                                             </div>   
//                                 )}
//                                 else if(friend.severityLevelId === 1){
//                                     return (
//                                         <div className="Source">
//                                             <>  <h3 className="Level"><b>Level 1</b></h3>
//                                              <p className ="Description">Tingling or itching in the mouth
//                                                   Swelling of the lips, face, tongue.</p>
//                                               <h4 className="Treatment">Treatment:</h4>
//                                               <p className ="Description">Use common allergy medicines such as benedryl, antihistamines, adrenaline </p>
//                                                 <p className ="people__Allergy">{totalSeverityMessageOne} </p>
//                                             </>
//                                         </div>   
//                             )}

//                         }
//                     }
//                 )
//             }
                
        
//             </>
//         )

// }


