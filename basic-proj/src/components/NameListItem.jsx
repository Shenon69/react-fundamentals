import React from "react";

function NameListItem(props){


    return(
        <div>
            <p>Name: {props.name}</p>
            <p>City : {props.game}</p>
        </div>
    )
}

export default NameListItem;