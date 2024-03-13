import React from 'react'
import {
    Link, Outlet
}
from "react-router-dom"
import "./nav.css"
const Root = () => {
  return (
    <div>


        <ul className = "nav">


            <li>

                <Link to="/">About</Link>
            </li>
             <li>

                <Link to="/work">Work</Link>
            </li>
             <li>

                <Link to="/contact">Contact</Link>
            </li>
             <li>

                <Link to="/resume">Resume</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Root