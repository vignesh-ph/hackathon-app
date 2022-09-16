import { Button, Box } from "@mui/material";
import listData from '../data/data.json'
import Typography from '@mui/material/Typography';
import {
    
    useNavigate
  } from "react-router-dom";

const Card = ({ hypothesis,changes }) => {
    const navigate = useNavigate();
    return (
        <Box sx={{ display:'flex', py: 1,  justifyContent:'space-between',border: '1px solid', borderRadius: 1, px: 3, }}>
        <Box sx={{}}>   

            <Typography sx={{ margin: 0, padding: 0, marginRight:'auto' }}  variant="body1" gutterBottom>{hypothesis}</Typography>
            {
                changes.map((statement) =>  <Typography sx={{ margin: 0, padding: 0, marginRight:'auto' }}  variant="body2" gutterBottom>{statement}</Typography>)
            }
        </Box>
        <Button variant="outlined" sx={{ height:'100%'}} onClick={() => navigate("/analytics")}>View Analytics</Button>
        </Box>
    )
}

const Hypothesis = () => {
    return (
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            rowGap: 1,
            flex: 1
        }}>
            {
                listData?.map((data) => <Card key={data.hypothesis} {...data}/>)
            }
        </Box>
    )
};

export default Hypothesis;