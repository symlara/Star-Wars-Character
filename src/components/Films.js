import React from 'react';
import headshot1 from '../assets/images/han-solo-1.png';

function Films() {
    return (
        <section>
            <div className="films">
            <article className="pa3 pa5-ns" id="about-me">
            <h1>Han Solo</h1>
            <img src={headshot1} alt="han"/>
        </article>
                <h1 id="films-page">Films has appeared in</h1>
            
            <div id="han-films">                
                <ul>
                    <li>A New Hope</li>
                    <li>The Empire Strikes Back</li>
                    <li>Return of the Jedi</li>
                </ul>
            </div>
            </div>
        </section>
    )
}

export default Films;