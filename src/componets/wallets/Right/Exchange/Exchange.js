import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import data from '../../../../data/data';

function Exchange() {
    return (
        <div>
             <p style={{color:'blue', fontWeight:'bold'}}>From</p>
        <Autocomplete
        id="combo-box-demo"
        options={data}
        renderOption={(option) => (
        <React.Fragment>
          <img src={option.img} style={{width:30, marginRight:10}}/>
          {option.name}
        </React.Fragment>
      )}
        getOptionLabel={(option) => option.name}
        style={{ width: 300,marginTop:-20 }}
        renderInput={(params,option) => 
        <React.Fragment>
            <img src={params.img} style={{width:30}}/>
            <TextField {...params} label={params.name} variant="outlined" />
        </React.Fragment>
    }
        />

<p style={{color:'blue', fontWeight:'bold'}}>To</p>
        <Autocomplete
        id="combo-box-demo"
        options={data}
        renderOption={(option) => (
        <React.Fragment>
          <img src={option.img} style={{width:30, marginRight:10}}/>
          {option.name}
        </React.Fragment>
      )}
        getOptionLabel={(option) => option.name}
        style={{ width: 300,marginTop:-20 }}
        renderInput={(params,option) => 
        <React.Fragment>
            <img src={params.img} style={{width:30}}/>
            <TextField {...params} label={params.name} variant="outlined" />
        </React.Fragment>
    }
        />
        </div>
    )
}

export default Exchange
