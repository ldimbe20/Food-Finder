import React from "react"
import "./SeverityLevel.css"



export const Severities = () => {


    return (
        <>
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
            <p className ="Description">Use common allergy medicines such as benedryl, antihistamines, adrenaline </p>
       </div>
       <div className="Severities">
            <h3 className="Level"><b>Level 4</b></h3>
            <p className ="Description"> Wheezing, nasal congestion and inability to breath or trouble breathing</p>
            <h4 className="Treatment">Treatment:</h4>
            <p className ="Description">Use common allergy medicines such as benedryl, antihistamines, adrenaline </p>
       </div>
     </>
    )
}