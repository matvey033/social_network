import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className='content'>
        <Dialogs />
      </div>
      {/* <Profile /> */}
    </div>
  );
}

export default App;
