import React from "react";
import Home from "./Home";
import Nav2 from "./Nav2";
import Educators from "./Educators";
// import CareerImpact from "./CareerImpact";
import Curriculum2 from "./Curriculum2";
import ProgramFee from "./ProgramFee";
import FAQs from "./FAQs";
import Video from "./Video";
import Curriculum from "./Curriculum";




const HomePage = () => {
    return (
        <>
            <Home />
            <Nav2 />
            {/* <ProgramFee /> */}
            <Educators />
            <Curriculum/>
            <Curriculum2/>         
            <Video />
            <FAQs/>


        </>
    );
}

export default HomePage;