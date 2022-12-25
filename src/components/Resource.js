import React from "react";

export const Resource = (props) => {
    
    return (
        <a className="resource" href={props.url} target="_blank" rel="noreferrer noopener"><li><strong>{props.name}</strong><br/>{props.description}</li></a>
    )
}