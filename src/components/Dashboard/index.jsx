import {React} from 'react';
import Grid from '@mui/material/Grid';
import TestCard from '../TestCard'
import Typography from '@mui/material/Typography';
import { Button, Box} from '@mui/material'
import Hypothesis from '../Hypothesis'
import {
    
  useNavigate
} from "react-router-dom";


export default function() {
  const navigate = useNavigate();

    return (
        <Box sx={{
          display:'flex',
          flexDirection:"column",
          rowGap: 1
          
        }}>
          <Box sx={{
            flex:1,
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
          }}>
             <Typography sx={{ margin: 0, padding: 0, marginRight:'auto' }}  variant="h5" gutterBottom>Hypothesis tested before</Typography>
              <Button variant='contained' onClick={() => navigate("/newABTest")} sx={{
            margin: '12px 0',
            marginLeft:'auto'
        }}>Conduct a New Experiment</Button>
        </Box>

          <Hypothesis />
          
        </Box>
    )
}