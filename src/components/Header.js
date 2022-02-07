import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './About';
import Films from './Films';
import Starships from './Starships';

function Header() {
    const [currentPage, handlePageChange] = useState("about");

    // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
        
      case "Films":
        return <Films />;

      case "Starships":
        return <Starships />;
      default:
        return null;
    }
  };

  return (
      <header>
      <div>
      <h1 className="header-info"><a href="/" id="header-name">Han Solo Profile</a></h1>
      </div>
            {/* Pass the state value and the setter as props
             to NavTabs */}
             <div>
<Navigation currentPage={currentPage}
handlePageChange={handlePageChange}
/>
      {/* Call the renderPage function passing in the currentPage */}
<main>
    <div>{renderPage(currentPage)}</div>
</main>
      </div>
      </header>
  );
}

export default Header;