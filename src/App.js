import {Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';



function App() {
  return (
    <div className="app">
    
      <Sidebar/>
    <Routes>
      <Route path='/' element={<Main/>}/>
  
    </Routes>
    

    </div>
  );
}

export default App;
