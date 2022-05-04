import * as React from "react"
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="privacy" element={<Privacy/>}/>

      </Routes>
    </div>
  );
}

function Home() {
  return(
    <>
    <nav>
      <ul className="my-list">
        <li>Home</li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/privacy">Privacy</Link></li>
      </ul>
    </nav>
    <main>
      <h2>Welcome to the homepage</h2>
      <p>You will get more information later</p>
    </main>
    </>
  );
}

function About() {
  return(
    <>
    <nav>
      <ul className="my-list">
        <li><Link to="/.">Home</Link></li>
        <li>About</li>
        <li><Link to="/privacy">Privacy</Link></li>
      </ul>
    </nav>
    <main>
      <h2>Welcome to the about page</h2>
      <p>Test text skrivs här</p>
    </main>
    <section></section>
    <footer></footer>
    </>
  );
}

function Privacy() {
  return(
    <>
    <nav>
      <ul className="my-list">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>Privacy</li>
      </ul>
    </nav>
    <main>
      <h2>Privacy</h2>
      <p>We are very private</p>
    </main>
    </>
  );
}

export default App;
