// import React, { useEffect, useState } from "react"
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Route, Redirect} from "react-router-dom"
import { Welcome } from "./Welcome"



export const FoodFinder = () => (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("food_customer")) {
            return (
                <>
                <NavBar /> 
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


//getcurrent user 


//   <Route
//   render={() => {
//     if (localStorage.getItem("food_customer")) {
//       return (
//           <>
//           <NavBar />
//           <Welcome />
//       </>
//       );
//     } else {
//       return <Redirect to="/login" />;
//     }
//   }}
// />


