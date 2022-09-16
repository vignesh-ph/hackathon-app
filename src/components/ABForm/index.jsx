import {React, useState} from "react";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import moment from "moment";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "./style.css";

export default function App() {
  const onSubmit = (e) => {
    e.preventDefault();
    let finalData = {...formData};
    finalData.duration = moment(formData.end) - moment(formData.start)

    console.log('final Data : ', finalData);
  }

  const [formData, setFormData] = useState({
    start: "",
    end: "",
    client: "",
    deploymentZones: [],
    splits: [],
    implementation1: "",
    implementation2: ""
  });

  const deploymentZoneItems = [
    {
      name: 'Deployment 1',
      value: 'depl1'
    },
    {
      name: 'Deployment 2',
      value: 'depl2'
    }
  ]

  const implementationItems = [
    {
      name: 'Test QnA 1',
      value: 'testQnA1'
    },
    {
      name: 'Test QnA 2',
      value: 'testQnA2'
    }
  ]

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const onChange = (fieldValue, fieldKey) => {
    console.log('e: ', fieldValue);
    setFormData({...formData, [fieldKey]: fieldValue})
  }

  return (
    <Container className="abFormContainer" fluid="true">
        <Box style={{padding: "20px"}}  sx={{ bgcolor: '#FAFAFA',height: '100vh', flexGrow: 1  }}>
          <form onSubmit={onSubmit}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <InputLabel id="start-label">Start</InputLabel>
                <DateTimePicker
                  labelId="start-label"
                  value={formData.start}
                  onChange={(e) => onChange(moment(e).format(), 'start')}
                  renderInput={(params) => <TextField {...params} />}
                  className="inputField"
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel id="end-label">End</InputLabel>
                <DateTimePicker
                  labelId="end-label"
                  value={formData.end}
                  minDateTime={dayjs(formData.start)}
                  onChange={(e) => onChange(moment(e).format(), 'end')}
                  renderInput={(params) => <TextField {...params} />}
                  className="inputField"
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel id="client-label">End</InputLabel>
                <TextField 
                  className="inputField" 
                  labelId="client-label"
                  variant="outlined" 
                  onChange={(e) => onChange(e.target.value, 'client')} 
                  value={formData.client}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel id="deployment-zone-label">Deployment Zones</InputLabel>
                <Select
                  labelId="deployment-zone-label"
                  value={formData.deploymentZones}
                  onChange={(e) => onChange(e.target.value, 'deploymentZones')}
                  multiple
                  MenuProps={MenuProps}
                  className="inputField"
                >
                  {deploymentZoneItems.map((item) => (
                    <MenuItem
                      key={item.name}
                      value={item.value}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={6}>
                <InputLabel id="implementation1-label">Implementation 1</InputLabel>
                <Select
                  labelId="implementation1-label"
                  value={formData.implementation1}
                  onChange={(e) => onChange(e.target.value, 'implementation1')}
                  MenuProps={MenuProps}
                  className="inputField"
                >
                  {implementationItems.map((item) => (
                    <MenuItem
                      key={item.name}
                      value={item.value}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={6}>
                <InputLabel id="implementation2-label">Implementation 2</InputLabel>
                <Select

                  value={formData.implementation2}
                  onChange={(e) => onChange(e.target.value, 'implementation2')}
                  MenuProps={MenuProps}
                  labelId="implementation2-label"
                  className="inputField"
                >
                  {implementationItems.map((item) => (
                    <MenuItem
                      key={item.name}
                      value={item.value}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </Select> 
              </Grid>
              <Grid item xs={12}>
                <Button size="large" variant="contained" type="submit">SUBMIT</Button>
              </Grid>
            </Grid>
            </LocalizationProvider>
          </form>
        </Box>
      </Container>
  );
}
