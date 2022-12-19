import React from "react";

export const Resource = (props) => {
    console.log(props);
    
    return (
        <a href={props.url} target="_blank" rel="noreferrer noopener"><li>{props.site}</li></a>
    )
}