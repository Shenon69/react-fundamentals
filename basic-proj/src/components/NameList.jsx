import React from "react";
import NameListItem from "./NameListItem";

function NameList (){

    const namelist = {
        name:{
            name: "John Doe",
            age: 30
        },
        location:{
            city: "New York",
            state: "NY"
        }
        };
    
    return (
        <div>
            <h1>Name List</h1>
            <hr />
            <NameListItem name={namelist.name.name} game={namelist.location.city} />

        </div>
    )
}

export default NameList;