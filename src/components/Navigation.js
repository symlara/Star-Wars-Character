//// Navigation Title must highlight when you're on the page.
// Tabs are clickable
import React from 'react';

function Navigation(props) {
    const tabs = ["About", "Films", "Starships" ];
    return (
        <div>
            <nav>
            <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li id="nav-items"
            className={
              props.currentPage === tab ? "nav-item is-active" : "nav-item"
            } 
            key={tab}
          >
            <a 
              href={"#" + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      </nav>
        </div>
    );
}

export default Navigation;