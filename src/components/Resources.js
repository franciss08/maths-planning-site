import React from "react";
import { Resource } from "./Resource";

export const Resources = ({resourceType, resources}) => {
    return (
        <div>
            <h2>{resourceType}</h2>
            <ul>
                {resources.map((resource, index) => {
                    return <Resource 
                        name={resource.name}
                        description={resource.description}
                        url={resource.url}
                        key={resourceType+index}
                        />
                })}
            </ul>
        </div>
    )
}