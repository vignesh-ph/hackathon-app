import './App.css';
import ABForm from './components/ABForm';
import Map from './components/HeatMap';
import Dashboard from './components/Dashboard';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
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
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
          <Toolbar>
              <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
              A/B TESTER
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button href={item.link} key={item.name} sx={{ color: '#fff' }}>
                  {item.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ p: 6 }}>
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
