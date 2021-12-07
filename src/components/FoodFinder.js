import React, { useEffect, useState } from "react"
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";

export const FoodFinder = () => {
    
    return (
        <>
            <NavBar />
            <h1>Food Finder</h1>
            <ApplicationViews />
        </>
    )

}
