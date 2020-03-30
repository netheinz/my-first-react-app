import React, { useState, useEffect } from "react";


export default function Jokes(props) {
    const [apiData, setApiData] = useState(null);


    async function getJoke() {
        const fetchHeaders = new Headers();
        fetchHeaders.append("Accept", "application/json");

        try {
            const request = await fetch("https://icanhazdadjoke.com/", {headers: fetchHeaders});
            const response = await request.json();
            console.log("getJoke -> response", response);

            setApiData(response);
        } catch (error) {
            console.log("getJoke -> Error", error);
        }
    }

    useEffect(() => {
        getJoke()
    }, [])

    return (
        <div>
            <button onClick={getJoke}>Hent joke</button>
            <p>
                {apiData && apiData.joke}
            </p>
        </div>
    )
}