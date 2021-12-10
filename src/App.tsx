import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import Tasks from './components/Tasks';


function App() {
   return (
    <Router>
      <div className="App">
          <Header/>
        <div className="Content">     
          <Routes>
              <Route path ="/tasks" element={<Tasks/>}/>
              <Route path ="/categories"element={<Categories/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
