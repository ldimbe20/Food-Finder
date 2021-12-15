const createFoodChoice = (friendsFoodRestrictions) => {
    const fetchArray = []
    // fetchArray - new array for all promises 
    // posting each choice in the chosenMaterials object in the worksMaterials resource
    choiceFood.chosenFood.forEach(
        (choiceFoodId) => {
            /// pushing a promise to fetchArray
            fetchArray.push(
                fetch("http://localhost:8088/friendFoodRestrictions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        // choiceFoodId - Id in the new set() 
                        foodRestrictionId: choiceFoodId,
                        friendsFoodRestrictionsId: storedResponse.id
                        
                    })
                    
                })
            ) 
        
            
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

       //! this component is pushing my id sets into friendFoodRestriction table