import './generate.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
//import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
//import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['NOS', 'SET'];
const gstoptions = ["18%", "12%"];

export default function Generate({ InputLabelProps = {},...props}) {

    //const [value, setValue] = React.useState('');
   // const [inputValue, setInputValue] = React.useState('');
   /* const handleChange = (event) => {
      setGstrate(event.target.value);
    };*/
  return (


    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='CompanyName'>
        <h1>Shakambhari Udyog</h1>
      </div>
     
      <div  className='Invoicedet'>
          <div className='Invoice_text' >
            <h3>Invoice Details</h3>
          </div>
          <div className='Invoice_textfield'>
            <TextField
              id="filled-search"
              label="Invoice Number"
              type="text"
              variant="filled"
              className='textfield'
            />
            <TextField
              id="filled-search"
              label="Dispatch Date"
              type="date"
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="filled-search"
              label="Order Date"
              type="date"
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
      </div>




{/*---------------------------------------------------------------------------------------------------------------------------------------*/}


      <div  className='Invoicedet'>
          <div className='Invoice_text' >
            <h3>Customer Details</h3>
          </div>
          <div className='Invoice_textfield'>
          <TextField
              id="gstnumber"
              label="GST Number"
              type="text"
              helperText="Length: 15 Characters"
              variant="filled"
              placeholder='Ex. 29BDXXXXXXXXXXX'
            />
            <TextField
              id="customer_name"
              label="Customer Name"
              type="text"
              variant="filled"
            />
            <TextField
              id="address"
              label="Address"
              type="text"
              variant="filled"
            />
            <TextField
              label="Mobile Number"
              id="mobileno"
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
              }}
              variant="filled"
            />
            <TextField
              id="City"
              label="City / Village"
              type="text"
              variant="filled"
            />
            <TextField
              id="state"
              label="State"
              type="text"
              variant="filled"
            />
            <TextField
              id="postalcode"
              label="Postal Code"
              type="text"
              variant="filled"
              placeholder='Ex. 580030'
            />
          </div>
      </div>



{/*---------------------------------------------------------------------------------------------------------------------------------------*/}

      <div  className='Invoicedet'>
          <div className='Invoice_text' >
            <h3>Transport Details</h3>
          </div>
          <div className='Invoice_textfield'>
            <TextField
              id="Transportname"
              label="Transport Name"
              type="text"
              variant="filled"
              className='textfield'
            />
            <TextField
              id="vehicleno"
              label="Vehicle Number"
              type="text"
              variant="filled"
            />
            <TextField
              id="drivermobile"
              label="Driver Mobile"
              type="text"
              variant="filled"
            />
          </div>
      </div>


{/*---------------------------------------------------------------------------------------------------------------------------------------*/}


      <div  className='Invoicedet'>
          <div className='Invoice_text' >
            <h3>Transport Details</h3>
          </div>
          <div className='Invoice_textfield'>
            <TextField
              id="Product"
              label="Product Description"
              type="text"
              variant="filled"
            />
            <TextField
              id="hsn"
              label="HSN Code"
              type="text"
              variant="filled"
            />

            {/*

            <FormControl variant="filled" sx={{ m: 1, minWidth: '25ch' }}>
              <InputLabel id="gst-rate">GST Rate</InputLabel>
              <Select
              labelId="gst-rate"
              id="gst-rate"
              value={gstrate}
              label="GST Rate"
              onChange={handleChange}
              >
              <MenuItem value={12}>12 %</MenuItem>
              <MenuItem value={18}>18 %</MenuItem>
              </Select>
            </FormControl>
            
            */ }     
                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  options={gstoptions}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="GST Rate"
                      InputProps={{
                        ...params.InputProps,
                        type: 'text',
                        
                      }}
                      variant="filled"
                    />
                  )}
                />

                <Autocomplete
                  freeSolo
                  id="nosset"
                  disableClearable
                  options={options}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="NOS/SET"
                      InputProps={{
                        ...params.InputProps,
                        type: 'text',
                      }}
                      variant="filled"
                    />
                  )}
                />

            
            

            <TextField
              id="quantity"
              label="Quantity"
              type="text"
              variant="filled"
            />
            <TextField
              id="Ratepercomp"
              label="Rate Per Component"
              type="text"
              variant="filled"
            />
            <TextField
              id="amount"
              label="Amount"
              type="text"
              variant="filled"
            />

          </div>
      </div>


{/*---------------------------------------------------------------------------------------------------------------------------------------*/}

      <div  className='Invoicedet'>
          <div className='Invoice_text' >
            <h3>E-WAY Bill Details</h3>
          </div>
          <div className='Invoice_textfield'>
            <TextField
              id="eway"
              label="E-WAY BILL Number"
              type="text"
              variant="filled"
            />
          </div>
      </div>
    </Box>
  );
}
