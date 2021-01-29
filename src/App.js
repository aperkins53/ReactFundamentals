import './App.css';
import NameProp from './components/NameProp';
import Contacts from './components/Contacts';
import State from './components/State';

function App() {
  return(
    <div className="App">
      <NameProp  name="Alec" />
      <Contacts name="Alec" age="23" school="FCHS" graduationYear="2016" />
      <State />
    </div>
  );
}

export default App;
