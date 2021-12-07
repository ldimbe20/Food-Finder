import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { FoodFinder } from "./components/FoodFinder.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <FoodFinder />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)
