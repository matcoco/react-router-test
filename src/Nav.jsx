import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return(
        <div>
            <nav>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/archives"}>archives</NavLink>
            </nav>
        </div>
    )
}

export default Navigation