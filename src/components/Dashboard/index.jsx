import {React} from 'react';
import Grid from '@mui/material/Grid';
import TestCard from '../TestCard'
import Typography from '@mui/material/Typography';

export default function() {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Active A/B Tests
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TestCard />
                </Grid>
                <Grid item xs={4}>
                    <TestCard />
                </Grid>
                <Grid item xs={4}>
                    <TestCard />
                </Grid>
                <Grid item xs={4}>
                    <TestCard />
                </Grid>
                <Grid item xs={4}>
                    <TestCard />
                </Grid>
                <Grid item xs={4}>
                    <TestCard />
                </Grid>
                <Grid item xs={4}>
                    <TestCard />
                </Grid>
            </Grid>
        </div>
    )
}