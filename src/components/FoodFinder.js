// import React, { useEffect, useState } from "react"
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Route, Redirect} from "react-router-dom"



export const FoodFinder = () => (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("food_customer")) {
            return (
                <>
                <NavBar />
                <h1>Food Finder</h1>
                
                <ApplicationViews />
            </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );

