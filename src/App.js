import { Routes, Route} from 'react-router-dom';

import Home from "./pages/Home"
import Characters from "./pages/Characters"
import Episodes from "./pages/Episodes"
import './App.css';
import NavBar from './components/navBar/NavBar';


export default function App() {
  return (
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/characters' element={<Characters/>}/>
          <Route path='/episodes' element={<Episodes/>}/>
        </Routes>
    </div>
  );
}

