import React from 'react';
import headshot from '../assets/images/Leia_Organa.png';

function About() {
    return (
        <article class="pa3 pa5-ns" id="about-me">
            <h1 class="f2">About Me</h1>
            <h2>Leia Organa</h2>
            <img src={headshot} alt="leia"/>
            
        </article>
            
       
    );
}

export default About;