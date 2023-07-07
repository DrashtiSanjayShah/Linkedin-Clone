import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import Login from './Login';
import News from './News';

function App() {
  const user = useSelector(selectUser);
  
      
  return (
    <div className="app">
      {/* header */}
      <Header />
      
      {!user ? (
  <Login />
) : (
  <div className='app__body'>
    <Sidebar />
    {/* feed */}
    <Feed />
    {/* widgets  */}
    <News />
  </div>
)}
         

     </div>
  );
}

export default App;
