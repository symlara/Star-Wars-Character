import React, { useState } from 'react';
import './index.css';
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";





function App() {
const [currentTab, setCurrentTab] = useState("about");

const renderTab = () => {
  


  switch (currentTab) {
    // be sure to capitalize strings
      case "about":
        return <About />;
        case "portfolio":
          return <Portfolio />;
          case "contact":
            return <Contact />;
            case "resume":
              return <Resume />;
        default:
          return null;
  }
};



return (
  <div>
    <div>
    <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
    </div>
   
    
    <div>
    <main>
    {renderTab()}
      </main>
    </div>

    <div>
      { <Footer></Footer> }
    </div>


  </div>
  );
}

export default App;
