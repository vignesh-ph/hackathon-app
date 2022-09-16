import {  Button,Box, Chip  } from '@mui/material'
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
        <div style={{margin: 0, padding: 0}}>
            <Chip size='small' label="client" sx={{color: 'white', mr: 1}} variant="outlined" />
            <span style={{fontSize: '20px', padding: 0, color: 'white'}}>testcustomer-fast-prs</span>
        </div>
        </Box>
    </Box>
};

export default Navbar