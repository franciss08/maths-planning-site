import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = ({pages}) => {

    return (
        <div className="nav-bar">
            <ul>
                <NavLink 
                    to="/"
                    className={({isActive})=> 
                        isActive? "selected" : undefined
                        }
                    ><li>Home</li></NavLink>
                {pages.map((page, index) => {
                    return <NavLink 
                        to={page.path}
                        key={`page${index}`} 
                        className={({isActive}) => isActive? "selected" : undefined}
                    ><li>{page.title}</li></NavLink>
                })}
            </ul>
        </div>
    )
}