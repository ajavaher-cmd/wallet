import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import data from '../../../../data/data';
import QrReader from 'react-qr-reader';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import CropFreeIcon from '@material-ui/icons/CropFree';
    

function Send() {
    const [result, setResult] = useState('');
    const [toggle, setToggle] = useState(false)
    const handleScan = data => {
        if (data) {
          setResult(data);
          setToggle(false)
        }
      }
      const handleError = err => {
        console.error(err)
      }
    return (
        <div>
        <p style={{color:'blue', fontWeight:'bold'}}>From</p>
        <Autocomplete
        id="combo-box-demo"
        options={data}
        renderOption={(option) => (
        <React.Fragment>
          <img src={option.img} alt='img' style={{width:30, marginRight:10}}/>
          {option.name}
        </React.Fragment>
      )}
        getOptionLabel={(option) => option.name}
        style={{ width: 300,marginTop:-20 }}
        renderInput={(params,option) => 
        <React.Fragment>
            <img src={params.img} alt='img' style={{width:30}}/>
            <TextField {...params} label={params.name} variant="outlined" />
        </React.Fragment>
    }
        />
        <p style={{color:'blue', fontWeight:'bold'}}>To</p>
        <FormControl variant="outlined" style={{ width: 300, }}>
        <InputLabel htmlFor="input-with-icon-adornment" ></InputLabel>
        <OutlinedInput 
          id="input-with-icon-adornment"
          value={result}
          endAdornment={
            <InputAdornment position="end" >
              <CropFreeIcon style={{cursor: 'pointer'}} onClick={()=>setToggle(!toggle)}/>
            </InputAdornment>
          }
        />

</FormControl>
        {toggle?
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: 100 }}
        />:null}
       
        </div>
    )
}

export default Send
