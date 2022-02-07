import React from 'react';
// import axios from 'react';
import headshot from '../assets/images/han-solo.png';
  


function About() {


    return (
        <div className="container">

        <article className="pa3 pa5-ns" id="about-me">
            <h1>Han Solo</h1>
            <img src={headshot} alt="han"/>
        </article>

        <div class="pa4" id="about-han">
            <h1 class="f2">About Han Solo</h1>

            <ul>
                <li>
                    Height: 150"
                </li>
                <li>
                    Weight: 49"
                </li>
                <li>
                    Hair Color: brown
                </li>
                <li>
                    Birth Year: 19BBY
                </li>
                <li>
                    Species Information: No information to report about species.
                </li>
            </ul>
        </div>
            </div>
            
       
    );
}

export default About;


// export default class PersonList extends React.Component {
//     state = {
//       persons: []
//     }
  
//     componentDidMount() {
//       axios.get('https://swapi.dev/api/people/5/')
//         .then(res => {
//           const persons = res.data;
//           this.setState({ persons });
//         })
//     }
  
//     render() {
//       return (
//         <ul>
//           {
//             this.state.persons
//               .map(person =>
//                 <li key={person.name}>{person.height}</li>
//               )
//           }
//         </ul>
//       )
//     }
//   }
