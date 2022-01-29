


import React, { useEffect, useState } from "react"
import "./SeverityLevel.css"



export const Severities = () => {
    const loggedInId = parseInt(localStorage.getItem("food_customer"));
    const [severityModel, setSeverityModel] = useState([])
    const [severityLevels, setSeverityLevels] = useState([])
    const [friendFoodRestriction, setFriendFoodRestriction] = useState([])
    



    console.log("before useEffect");
    useEffect( // Getting data used to set severity level in next useEffect
        () => {
            fetch("http://localhost:8088/friendFoodRestrictions?_expand=friend&_expand=severityLevel")
                .then(res => res.json())
                .then((data) => { 
                    // console.log("friendFoodRestrictions");
                    // console.log(data);
                    setFriendFoodRestriction(data);
                    fetch("http://localhost:8088/severityLevels")
                        .then(resSeverity => resSeverity.json())
                        .then((dataSeverity) => {
                            setSeverityLevels(dataSeverity);

                           //!create new data that includes restrictions that filter food restrictions by if user is logged in and by food severity level
                           console.log("friendFoodRestrictions", friendFoodRestriction)
                    
                           setSeverityModel(dataSeverity.map((severityLevel) => {
                                return {
                                    key: severityLevel.id,
                                    severityId: severityLevel.id,
                                    severityDisplayName: `Level ${severityLevel.id}`,
                                    description: severityLevel.description,
                                    restrictions: data.filter(restriction => restriction.friend?.userId == loggedInId && restriction.severityLevelId === severityLevel.id)
                               //above is coming back with an empty array but only sometimes
                               
                                };
                            }));
                        });

                })
        },
        []
    )

    return (
        <>
            <h2 className="allergyForm__title">Understanding Food Allergy Levels</h2>
            { severityModel.map(
                    (severityItem) => {
                        return (
                            
                            <div className="Source" key={`severityItem--${severityItem.key}`}>
                                <>  <h3 className="Level" key={`displayName--${severityItem.severityDisplayName}`}><b>{severityItem.severityDisplayName}</b></h3>
                                    
                                    <p className="Description" key={`description--${severityItem.description}`}>
                                    <b>Common Symptoms: </b>{severityItem.description}
                                    </p>
                                    <b><i>This allergy level affects </i></b>
                                    <p className="people__Allergy2" key={`restrictions--${severityItem.restrictions}`}>
                                    
                                     {severityItem.restrictions.map((r) => {return r.friend.name}).join(", ")} </p> 
                                       
                                </>
                            </div>
                        )
                    }
                )
            }

        </>
    );

}


