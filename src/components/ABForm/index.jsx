import {React, useState} from "react";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
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
  const [formData, setFormData] = useState({
    start: null,
    end: null,
    deploymentZone: "",
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
    if(formData.start && formData.end) {
      finalData.start = moment(formData.start);
      finalData.end = moment(formData.end);
      finalData.duration = formData.end.diff(formData.start)
    }

    console.log('final Data : ', finalData);
  }
  const onChange = (fieldValue, fieldKey) => {
    setFormData({...formData, [fieldKey]: fieldValue})
  }

  return (
    <form onSubmit={onSubmit}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="fieldContainer" style={{width: '600px'}}>
            <InputLabel id="hypothesis-label">Hypothesis</InputLabel>
            <TextField
              labelid="hypothesis-label"
              multiline
              minRows={3}
              value={formData.hypothesis}
              onChange={(e) => onChange(e.target.value, 'hypothesis')}
              className="inputField"
            />
          </div>
        </Grid>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <div className="fieldContainer">
            <InputLabel id="deployment-zone-label">Deployment Zone</InputLabel>
            <Select
              labelid="deployment-zone-label"
              value={formData.deploymentZone}
              onChange={(e) => onChange(e.target.value, 'deploymentZone')}
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
          </div>
        </Grid>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
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
  );
}
