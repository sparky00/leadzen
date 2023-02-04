import './App.css';

import { Routes, Route} from "react-router-dom";
import Page from './components/page';
import Home from './components/home';

function App() {


  return (
    
    <div className="App">
      <Routes>
     <Route path="/page" element={<Page/>}/>
     <Route path="/" element={<Home/>}/>
   </Routes>
      </div>
  );
}

export default App;
