import React from "react";
import { Resource } from "./Resource";

export const Resources = ({resourceTitle, resources}) => {

    return (
        <div>
            <h2>{resourceTitle}</h2>
            <ul>
                {resources.map((resource, index) => {
                    return <Resource 
                        name={resource.resourceName}
                        description={resource.description}
                        url={resource.url}
                        key={resourceTitle+index}
                        />
                })}
            </ul>
        </div>
    )
}