import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './components/Routes';

function App() {
  return (
    <Router >
     <Header/>
        <main className="main">
            <Routes/>
        </main>
      <div id="footer">
     <Footer/>
     </div>
    </Router>
  );
}

export default App;
