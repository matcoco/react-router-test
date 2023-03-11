import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/archives")
    }

    return(
        <div>
            <button onClick={handleNavigate}>aller vers archives</button>
        </div>
    )
}

export default Home