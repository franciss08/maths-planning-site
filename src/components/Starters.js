import React from "react";
import { Resource } from "./Resource";

export const Starters = () => {
    const links = [{site: 'link 1', url: 'https://www.mathsgenie.co.uk/gcse.html'}]
    let n=1;

    return (
        <div>
            <p>I'm the starters page</p>
            <ul>
                {links.map((link) => {
                    n++
                    return <Resource 
                        site={link.site}
                        url={link.url}
                        key={n}
                        />
                })}
            </ul>
        </div>
    )
}