import { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import requests from './requests.js';
import Results from './Results.js';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

    return (
        <div className="app" >
            <Header />

            <Nav setSelectedOption={setSelectedOption} />

            <Results selectedOption={selectedOption} />
        </div>
    );
}

export default App;