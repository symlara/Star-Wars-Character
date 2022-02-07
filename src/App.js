import {useState} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Header from './components/Header';
import Films from './components/Films';
import Search from './search';
import Announcer from './announcer';

// list used to search for the name we want
const characters = [
  { id: '1', name: 'han solo' }
];

const filterCharacters = (characters, query) => {
  if (!query) {
      return characters;
  }

  return characters.filter((character) => {
      const characterName = character.name.toLowerCase();
      return characterName.includes(query);
  });
};

const App = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('han solo');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredCharacters = filterCharacters(characters, searchQuery);


  return (
    <Router>
    <div>
      <Header></Header>
      <Announcer 
      message={`${filteredCharacters.length} characters`}
      />
      <Search 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
     />
     <ul>
       {/* using map function to loop and render name  */}
       {filteredCharacters.map((character) => {
         <li key={character.id}>{character.name}</li>
       })}
     </ul>
      <Films></Films>
      
    </div>
</Router>
  );
}


export default App;

