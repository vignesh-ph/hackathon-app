import React from "react";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./style.css"

const schema = yup.object({
  start: yup.date().required(),
  duration: yup.number().positive().integer().required(),
  client: yup.string().required(),
  deploymentZones: yup.array().of(yup.string()),
  splits: yup.array().of(yup.string()),
  implementations: yup.array().of(yup.string())
}).required();

export default function App() {
  const { register, handleSubmit, formState:{ errors }, control } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

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

  const splitItems = [
    {
      name: 'QA PILOT',
      value: 'QA_PILOT'
    },
    {
      name: 'QA LEGACY',
      value: 'QA_LEGACY'
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

  return (
    <Container fluid>
        <Box style={{padding: "20px"}}  sx={{ bgcolor: '#FAFAFA',height: '100vh' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              control={control}
              name="start"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                
                <DesktopDatePicker
                  label="Start"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={onChange}
                  renderInput={(params) => <TextField {...params} />}
                  className="inputField"
                  />
                  )}
            />
            <p>{errors.start?.message}</p>

            <Controller
              control={control}
              name="duration"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField className="inputField" label="Duration" variant="outlined" onChange={onChange} />
              )}
            />
            <p>{errors.duration?.message}</p>

            <Controller
              control={control}
              name="client"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField className="inputField" label="Client" variant="outlined" onChange={onChange} />
              )}
            />
            <p>{errors.client?.message}</p>

            {/* <input placeholder="Deployment Zones" {...register("deploymentZones")} /> */}
            <InputLabel id="deployment-zone-label">Deployment Zones</InputLabel>
            <Controller
              control={control}
              name="deploymentZones"
              render={({ field: { onChange, onBlur, value = [], ref } }) => (
                <Select
                  labelId="deployment-zone-label"
                  value={value}
                  onChange={onChange}
                  
                  input={<OutlinedInput label="Name" />}
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
              )}
            />
            <p>{errors.deploymentZones?.message}</p>
            <InputLabel id="splits-label">Splits</InputLabel>
            <Controller
              control={control}
              name="splits"
              render={({ field: { onChange, onBlur, value = [], ref } }) => (
                <Select
                  labelId="splits-label"
                  value={value}
                  onChange={onChange}
                  
                  input={<OutlinedInput label="Splits" />}
                  MenuProps={MenuProps}
                  className="inputField"
                >
                {splitItems.map((item) => (
                  <MenuItem
                    key={item.name}
                    value={item.value}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              )}
            />
            <p>{errors.splits?.message}</p>
            <InputLabel id="implementations-label">Implementations</InputLabel>
            <Controller
              control={control}
              name="implementations"
              render={({ field: { onChange, onBlur, value = [], ref } }) => (
                <Select
                  value={value}
                  onChange={onChange}
                  
                  MenuProps={MenuProps}
                  label="Implementations"
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
              )}
            />
            <p>{errors.implementations?.message}</p>
            
            <Button variant="contained" type="submit">SUBMIT</Button>
          </LocalizationProvider>
          </form>
        </Box>
      </Container>
    
  );
}
