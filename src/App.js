import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Starters } from './components/Starters';

function App() {
  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" />
          <Route path="/starters" element={<Starters/>} />
        </Routes>
      </div>
  );
}

export default App;
