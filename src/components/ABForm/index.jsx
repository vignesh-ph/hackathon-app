import {React, useState} from "react";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import moment from "moment";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "./style.css";

export default function App() {

  const [formData, setFormData] = useState({
    start: null,
    end: null,
    client: "testcustomer-fast-prs",
    deploymentZones: [],
    splits: [],
    implementation1: "",
    implementation2: "",
    hypothesis: ""
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

  const onSubmit = (e) => {
    e.preventDefault();
    let finalData = {...formData};
    finalData.start = moment(formData.start);
    finalData.end = moment(formData.end);
    finalData.duration = formData.end.diff(formData.start)

    console.log('final Data : ', finalData);
  }
  const onChange = (fieldValue, fieldKey) => {
    setFormData({...formData, [fieldKey]: fieldValue})
  }

  return (
    <Container className="abFormContainer" fluid="true">
        <Box style={{padding: "20px"}}  sx={{ bgcolor: '#FAFAFA', flexGrow: 1  }}>
          <form onSubmit={onSubmit}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className="fieldContainer" style={{width: '100%'}}>
                  <InputLabel id="hypothesis-label">Hypothesis</InputLabel>
                  <TextareaAutosize
                    labelid="hypothesis-label"
                    minRows={3}
                    style={{ width: '100%' }}
                    value={formData.hypothesis}
                    onChange={(e) => onChange(e, 'hypothesis')}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="fieldContainer">
                  <InputLabel id="start-label">Start Date</InputLabel>
                  <DateTimePicker
                    labelid="start-label"
                    value={formData.start}
                    onChange={(e) => onChange(e, 'start')}
                    renderInput={(params) => <TextField {...params} />}
                    className="inputField"
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="fieldContainer">
                  <InputLabel id="end-label">End Date</InputLabel>
                  <DateTimePicker
                    labelid="end-label"
                    value={formData.end}
                    minDateTime={dayjs(formData.start)}
                    onChange={(e) => onChange(e, 'end')}
                    renderInput={(params) => <TextField {...params} />}
                    className="inputField"
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="fieldContainer">
                  <InputLabel id="client-label">Client</InputLabel>
                  <TextField 
                    disabled
                    className="inputField" 
                    labelid="client-label"
                    variant="outlined" 
                    onChange={(e) => onChange(e.target.value, 'client')} 
                    value={formData.client}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="fieldContainer">
                  <InputLabel id="deployment-zone-label">Deployment Zones</InputLabel>
                  <Select
                    labelid="deployment-zone-label"
                    value={formData.deploymentZones}
                    onChange={(e) => onChange(e.target.value, 'deploymentZones')}
                    multiple
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    className="inputField"
                  >
                    {deploymentZoneItems.map((item) => (
                      <MenuItem
                        key={item.name}
                        value={item.value}
                      >
                        <Checkbox checked={formData.deploymentZones.indexOf(item.value) > -1} />
                        <ListItemText primary={item.name} />
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="fieldContainer">
                  <InputLabel id="implementation1-label">Template 1</InputLabel>
                  <Select
                    labelid="implementation1-label"
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
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="fieldContainer">
                  <InputLabel id="implementation2-label">Template 2</InputLabel>
                  <Select
                    value={formData.implementation2}
                    onChange={(e) => onChange(e.target.value, 'implementation2')}
                    MenuProps={MenuProps}
                    labelid="implementation2-label"
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
                </div>
              </Grid>
              <Grid item xs={12} style={{}} sx={{mt:4}}>
                <Button size="large" variant="contained" type="submit">SUBMIT</Button>
              </Grid>
            </Grid>
            </LocalizationProvider>
          </form>
        </Box>
      </Container>
  );
}
