import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const params = useParams();
    const {name} = params;
    console.warn(name);

    return(
        <div>
            <h2>this is {name} page </h2>
        </div>
    )
}

export default User;