import logo from './logo.svg';
import './App.css';
import Calculator from './calculator';
import StudentData from './student-management-system';
import WeatherApp from './weatherApp';
import NotesApp from './notes App';
import ProductStore from './productStore';

function App() {
  return (
    <div className="App">
    {/*  <Calculator/>
      <StudentData/>
      <WeatherApp/>
      <NotesApp/>*/}
      <ProductStore/>
    </div>
  );
}

export default App;
