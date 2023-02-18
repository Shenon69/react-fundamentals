import React from "react";
import NameListItem from "./NameListItem";
import Navbar from "./Navbar";

function NameList (){

    const namelist = [{
        name:{
            fname: "John Doe",
            age: 30
        },
        location:{
            city: "New York",
            state: "NY"
        }
        
        },
    {
        name:{
            fname: "Alexnader Piers",
            age: 20
        },
        location:{
            city: "Ragama",
            state: "Western"
        }
    }];
    
    return (
        <div>
           <Navbar />
            <NameListItem name={namelist[0].name.fname} game={namelist[0].location.city} />
            <NameListItem name={namelist[1].name.fname} game={namelist[1].location.city} />

        </div>
    )
}

export default NameList;