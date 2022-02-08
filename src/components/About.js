import React from "react";
import headshot from '../assets/images/han-solo.png';
import CharacterData from '../data/characters.json';



function About() {

    return (
        <div className="container">
            <div id="about-han">
            <h1>About Me</h1>
            <img src={headshot} alt="han-solo"/>
            
            {CharacterData.map((characterDetail, index) => {
                return <div>
                    <p><strong>Character Height:</strong>{characterDetail.height}</p>
                    <p><strong>Character Weight: </strong>{characterDetail.mass}</p>
                    <p><strong>Character Hair Color:</strong>{characterDetail.hair_color}</p>
                    <p><strong>Character Birth date:</strong>{characterDetail.birth_year}</p>
                    </div>
            })}
            </div>
        </div>
        
    );
}

export default About;


