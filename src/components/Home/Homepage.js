import React from 'react';
import { Element } from 'react-scroll';
import Welcome from '../Welcome/Welcome';



const Homepage = () => {
    return (
        <>
            <Welcome />
            <Element style={{ marginTop: "1500px" }} id="section" >
                Section
            </Element>
        </>
    )
}

export default Homepage;