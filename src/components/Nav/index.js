import React from 'react';
import '../../../src/index.css'
import 'tachyons';

function Nav (props) {
    const { currentTab, setCurrentTab } = props;



return (
    
    <nav>
    <ul className="flex-row" id="nav">
        <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
        <span onClick={() => setCurrentTab("about")}>About Me</span>
        </li>
        
        <li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
        </li>

        <li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("contact")}>Contact</span>
        </li>

        <li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("resume")}>Resume</span>
        </li>
    </ul>
</nav>
      

//   return (
//     <nav class="pa3 pa4-ns" id="nav">
//         <div class="tc pb3">
        
//             <a class="link dim gray f6 f5-ns dib mr3" href="about" className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
//             <span onClick={() => setCurrentTab("about")}>About Me</span>
//             </a>
            
//             <a class="link dim gray f6 f5-ns dib mr3" href="portfolio" className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
//                 <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
//             </a>

//             <a class="link dim gray f6 f5-ns dib mr3" href="contact" className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
//                 <span onClick={() => setCurrentTab("contact")}>Contact</span>
//             </a>

//             <a class="link dim gray f6 f5-ns dib mr3" href="resume" className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
//                 <span onClick={() => setCurrentTab("resume")}>Resume</span>
//             </a>
        
//         </div>
//     </nav>
   
)
}

export default Nav;