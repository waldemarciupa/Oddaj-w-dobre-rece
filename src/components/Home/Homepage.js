import React from 'react';
import { Element } from 'react-scroll';
import Welcome from '../Welcome/Welcome';
import Statistic from '../Statistic/Statistic';



const Homepage = () => {
    return (
        <>
            <Welcome />
            <Statistic />
            <Element style={{ marginTop: "1500px" }} id="section" >
                Section
            </Element>
        </>
    )
}

export default Homepage;