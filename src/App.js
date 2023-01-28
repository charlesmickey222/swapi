import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './componenents/NavBar/NavBar';
import StarshipPage from './pages/StarshipPage';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/starships' element={<StarshipPage/>}/>
    </Routes>
    </>
  );
}

export default App;
