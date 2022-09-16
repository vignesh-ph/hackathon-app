import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography} from '@mui/material'
 

const data = [
  {
    name: 'Sep 1',
    Implementation1: 40,
    Implementation2: 24,
    amt: 24,
  },
  {
    name: 'Sep 2',
    Implementation1: 30,
    Implementation2: 13,
    amt: 2210,
  },
  {
    name: 'Sep 3',
    Implementation1: 20,
    Implementation2: 40,
    amt: 2290,
  },
  {
    name: 'Sep 4',
    Implementation1: 27,
    Implementation2: 39,
    amt: 20,
  },
  {
    name: 'Sep 5',
    Implementation1: 18,
    Implementation2: 48,
    amt: 2181,
  },
  {
    name: 'Sep 6',
    Implementation1: 23,
    Implementation2: 38,
    amt: 25,
  },
  {
    name: 'Sep 7',
    Implementation1: 34,
    Implementation2: 43,
    amt: 2100,
  },
];

export default function Map() {
  
  return( 
        <Box style={{ height: '400px', pt: 4}}>
         <Typography variant='h5' gutterBottom>Hypothesis: Sorting most helpful answers in questions drives more conversion</Typography>
          <ResponsiveContainer width="70%" height="80%">
        <BarChart
          width={10}
          height={30}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Implementation1" fill="#82ca9d" />
          <Bar dataKey="Implementation2" fill="#8884d8" />

        </BarChart>
      </ResponsiveContainer>
        </Box>
    )
}