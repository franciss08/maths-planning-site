import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    const pages = [
        {title: 'Home', path: '/'},
        {title: 'Starters', path: '/starters'},
        {title: 'Practice', path: '/practice'},
        {title: 'Exam Questions', path: '/exam-questions'},
        {title: 'Useful tools', path: '/useful-tools'}
    ]
    
    return (
        <div>
            <ul>
                {pages.map((page, index) => {
                    return <Link to={page.path} key={`page${index}`}><li>{page.title}</li></Link>
                })}
            </ul>
        </div>
    )
}