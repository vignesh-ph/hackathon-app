import {  Button,Box  } from '@mui/material'
import Typography from '@mui/material/Typography';
import {
    
    useNavigate
  } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return <Box sx={{ backgroundColor:"#002e6e", width:'100vw', padding: '12px 0px'}}>
        <Box  sx={{ display:'flex', maxWidth: '1464px', minWidth:"inherit", margin:"0 auto", justifyContent:'space-between',
        
        }}>
        <Typography  onClick={() => navigate("/")} sx={{ cursor:'pointer'}} variant='h5' color={'white'}>Bazaarvoice Experiments</Typography>
      
        </Box>
    </Box>
};

export default Navbar