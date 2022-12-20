import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Resources } from './components/Resources';
import { resources } from './data/resources';

function App() {
  return (
      <div className="App">
        <h1>Maths Planning Site</h1>
        <NavBar />
        <Routes>
          <Route path="/" />
          <Route path="/starters" element={<Resources resourceType="Starters" resources={resources.starters}/>} />
        </Routes>
      </div>
  );
}

export default App;
