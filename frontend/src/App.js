import './App.css';
import AddStudent from './components/AddStudent';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    
     
      <div>
        <Header/>
        <BrowserRouter>
        <Routes>
          <Route path="/add" exact element={<AddStudent/>}/> 
    
        </Routes>
        </BrowserRouter>
      </div>
       
  );
}

export default App;