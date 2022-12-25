import React from "react";
import { Link } from "react-router-dom";

export const NavBar = ({pages}) => {

    return (
        <div className="nav-bar">
            <ul>
                <Link to="/"><li>Home</li></Link>
                {pages.map((page, index) => {
                    return <Link to={page.path} key={`page${index}`}><li>{page.title}</li></Link>
                })}
            </ul>
        </div>
    )
}