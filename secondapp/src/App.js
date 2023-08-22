
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Myform from './Components/Myform';

function App() {
  return (
    <>
    
      <Router>
        <Navbar/>
        <Routes>
          
          <Route path='/myform' element ={ <Myform/>} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
