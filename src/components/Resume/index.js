import React from 'react';
import 'tachyons';




function Resume() {
    return (
       
            <article class="cf pa3 mw9 center" id="proficiencies">
                <h1 class="f3 f2-m f1-l">My Resume</h1>
                    <section class="fl w-100">
                         <div class="fl w-100 w-50-m w-25-l pa3-m pa4-l">
                             <h2>Front-End Proficiencies</h2>
                                <p class="f6 lh-copy measure">
                                  HTML, CSS, JavaScript, jQuery, Bootstrap, React, Git, Responsive UI, Canva
                              </p>
                        </div>
                <div class="fl w-100 w-50-m w-25-l pa3-m pa4-l">
                    <h2>Back-End Proficiencies</h2>
                        <p class="f6 lh-copy measure">
                                 APIs, Node.Js, Express, (MVC) Model View Controller, REST, (PWA) Progressive Web Application
                        </p>
                </div>
    
                 <div class="fl w-100 w-50-m w-25-l pa3-m pa4-l">
                     <h2>Dev-Tool Proficiencies</h2>
                        <p class="f6 lh-copy measure">
                                 mySQL,
                                 Sequalize,
                                noSQL,
                                SQLite,
                                MongoDB,
                                Mongoose
                        </p>
                    </div>
                </section>
            </article>
        );
}

export default Resume;