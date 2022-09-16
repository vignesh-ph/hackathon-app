import {React} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function() {
    return (
        <Card sx={{ boxShadow: 2 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Client
                </Typography>
                <Typography variant="h5" sx={{ mb: 2.5 }} component="div" color='primary'>
                    testcustomer-fast-prs
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Implementations
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography color="text.primary">
                            Test QnA 1
                        </Typography>
                        <Typography color="text.secondary">
                            0.5 (weight)
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography color="text.primary">
                            Test QnA 2
                        </Typography>
                        <Typography color="text.secondary">
                            0.5 (weight)
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button size="small">Modify</Button>
            </CardActions>
        </Card>
    )
}