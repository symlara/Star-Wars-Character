import React from 'react';
import StarshipData1 from '../data/starship-1.json';
import StarshipData2 from '../data/starship-2.json';
import headshot2 from '../assets/images/falcon.png';
import headshot3 from '../assets/images/imperial.png';


function Starships () {
    return (
        <div> 
             <div>
               <img id="falcon" src={headshot2} alt="falcon" />
           </div>
           {/* starship 1 info starts here */}
            {StarshipData1.map((starshipDetail, index) => {
               return <div key="{starship}" className="starship1">
                   <h1>Starships Flown</h1>

                   <strong>Starship Name:</strong><i><p className="starship-1"> {starshipDetail.name}</p></i>
                   <strong>Starship Model:</strong> <i><p>{starshipDetail.model}</p></i>
                   <strong>Starship Length:</strong> <i><p>{starshipDetail.length}</p></i>

                   </div>

           })}

        <hr className="border1"></hr>
           <p>&nbsp;</p>
           <div>
               <img id="imperial" src={headshot3} alt="Imperial"/>
           </div>
            {/* starship 2 info starts here */}
           {StarshipData2.map((starshipDetail2, index) => {
               return <div key="{starship}" className="starship2">

                   <strong>Starship Name:</strong><i><p className="starship-2"> {starshipDetail2.name}</p></i>
                   <strong>Starship Model:</strong> <i><p>{starshipDetail2.model}</p></i>
                   <strong>Starship Length:</strong> <i><p>{starshipDetail2.length}</p></i>

                   </div>
            })}
        </div>
    )
}

export default Starships;