import React, { useState } from "react";

export default function Jokes(props) {
    const [apiData, setApiData] = useState(null);

    async function getJoke() {
        const fetchHeaders = new Headers();
        fetchHeaders.append("Accept", "application/json");
        try {
            const request = await fetch("https://icanhazdadjoke.com/", {Headers: fetchHeaders});
            const response = await request.json;
            console.log("getJoke -> response", response);
        } catch (error) {
            console.log("getJoke -> Error", error);
        }
    }

    return (
        <div>
            <button onClick={getJoke}>Hent joke</button>
        </div>
    )
}