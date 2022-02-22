import React from 'react';
 import Nav from "../Nav";
 import '../../../src/index.css'
 import 'tachyons';


 
function Header(props) {
    const { currentTab, setCurrentTab} = props;

    return (
        <header>
            <div>
                <h1><a href="/" class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" id="header">Aaliyah's React Portfolio</a></h1>
            </div>

            <div>
                <Nav currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                ></Nav>
            </div>
        </header>
    );
 }

 export default Header;