
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FavoriteMovie from './pages/Favorite-movie';
import About from './pages/About';
import Date from './pages/Date';
import MyPet from './pages/My-pet';
import Navigation from './components/Navigation';
import lordOfTheRings from './utils/movie-data';
import about from './utils/about-data';
import myPet from './utils/my-pet';
import Clock from './pages/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Navigation/>
        <div>
          <Routes>
            <Route path='favotite-movie' element={<FavoriteMovie movie={lordOfTheRings}/>}/>
            <Route path='about' element={<About about={about}/>}/>
            <Route path='clock'
            element={<Clock/>}/>
            <Route path='my-pet' element={<MyPet pet={myPet}/>}/>
          </Routes>
        </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
