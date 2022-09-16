import './App.css';
import ABForm from './components/ABForm';
import Map from './components/HeatMap';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <ABForm /> */}
        {/* <Link to="/analytics">Analytics</Link> */}
        <Link to="/analytics">Analytics</Link>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/analytics' element={<Map/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
