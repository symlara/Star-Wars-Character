import React from 'react';
import FilmData from '../data/film-1.json';
import FilmData2 from '../data/film-2.json';
import FilmData3 from '../data/film-3.json';
import headshot1 from '../assets/images/han-solo-1.png'

function Films() {
    return (
       <div className="container">
           <div>
               <img src={headshot1} alt="han-solo" />
           </div>
           {/* film 1 info starts here */}
           {FilmData.map((filmDetail, index) => {
               return <div key="{film}" className="film1">
                   <h1>Films Han Solo has appeared in</h1>

                   <strong>Film Title:</strong><i><p className="film-1"> {filmDetail.title}</p></i>
                   <strong>Film Director:</strong> <i><p>{filmDetail.director}</p></i>
                   <strong>Film Opening Crawl:</strong> <i><p><br></br>{filmDetail.opening_crawl}</p></i>

                   </div>

           })}


           <hr className="border1"></hr>
           <p>&nbsp;</p>
           <p>&nbsp;</p>

           {/* film 2 info starts here */}
           {FilmData2.map((filmDetail2, index) => {
               return <div key="{film}" className="film2">
                    <strong>Film Title:</strong><i><p className="film-2">{filmDetail2.title}</p></i>
                    <strong>Film Director:</strong><i><p className="film-2">{filmDetail2.director}</p></i>
                    <strong>Film Opening Crawl</strong><i><p className="film-2">{filmDetail2.opening_crawl}</p></i>
                   </div>
           })}

            <hr className="border2"></hr>
            <p>&nbsp;</p>
            <p>&nbsp;</p>

            {/* film 3 info starts here */}
            {FilmData3.map((filmDetail3, index) => {
               return <div key="{film}" className="film3">
                    <strong>Film Title:</strong><i><p className="film-3">{filmDetail3.title}</p></i>
                    <strong>Film Director:</strong><i><p className="film-3">{filmDetail3.director}</p></i>
                    <strong>Film Opening Crawl</strong><i><p className="film-3">{filmDetail3.opening_crawl}</p></i>
                   </div>
           })}
       </div>
    )
}

export default Films;