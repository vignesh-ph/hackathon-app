  import './App.css';
  import ABForm from './components/ABForm';
  import Map from './components/HeatMap';
  import Dashboard from './components/Dashboard';
  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import Toolbar from '@mui/material/Toolbar';
  import Typography from '@mui/material/Typography';
  import Button from '@mui/material/Button';
  import Navbar from './components/Navbar'; 
  import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";

  const navItems = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Create New A/B Test',
      link: '/newABTest'
    }
  ];

  function App() {
    return (
      <Router>
        <Box sx={{ display: 'flex', flexDirection:'column', }}>
          <Navbar />
          <Box component="main" sx={{  width: '1464px', margin:"0 auto", paddingTop: 2 }}>
            <Routes>
              <Route path='/' element={<Dashboard/>}></Route>
              <Route path='/analytics' element={<Map/>} />
              <Route path='/newABTest' element={<ABForm/>} />
            </Routes>
          </Box>
        </Box>




      </Router>
    );
  }

  export default App;
