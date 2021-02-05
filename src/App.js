import './App.css';
import Header from './components/Header'
import Intro from './components/challenges/day01/Intro'
import Home from './components/challenges/day01/Home'
import Footer from './components/challenges/day01/Footer'
import MortyParent from './components/challenges/Morty/Morty/MortyParent';

function App() {
  return (
    <div>
      <MortyParent />
    </div>
  );
}

export default App;
