import React from 'react';
import { Element } from 'react-scroll';
import Welcome from '../Welcome/Welcome';
import Statistic from '../Statistic/Statistic';
import Steps from '../Steps/Steps';
import About from '../About/About';
import WhoWeHelp from '../WhoWeHelp/WhoWeHelp';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Homepage = () => {
    return (
        <>
            <Welcome />
            <Statistic />
            <Steps />
            <About />
            <WhoWeHelp />
            <Contact />
            <Footer />
            <Element style={{ marginTop: "1500px" }} id="section" >
                Section
            </Element>
        </>
    )
}

export default Homepage;