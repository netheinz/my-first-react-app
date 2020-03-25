// import react module
import React from "react";

// sætter klassen og åbner export mulighed
export default class Filler extends React.Component {
    // constructor tager properties
    constructor(props) {
        // Super gør props tilgængelige
        super(props);
        // Sætter this.state (interne variabler)
        this.state = {
            not: "useless"
        }
    }

    // med React klasser følger disse metoder automatisk
    componentDidMount() {
        console.log("Did mount");
    }

    // Renderer resultatet
    render() {
        return (
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat praesentium impedit quibusdam magni odit voluptate deserunt eos illo error, atque rem sunt! Cupiditate hic repudiandae blanditiis ipsa placeat, tempore fugiat?
            </div>
        )
    }
}