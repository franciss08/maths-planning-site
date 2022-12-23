import React from "react";
import { Resource } from "./Resource";

export const Starters = ({resources}) => {
    return (
        <div>
            <h2>Starters</h2>
            <ul>
                {resources.map((resource, index) => {
                    return <Resource 
                        name={resource.name}
                        description={resource.description}
                        url={resource.url}
                        key={`resource-${index}`}
                        />
                })}
            </ul>
        </div>
    )
}