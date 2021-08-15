import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Left from './Left/Left';
import Right from './Right/Right';
import Chart from './../Chart/Chart'

function Wallets() {
    return (
        <div>
             <Grid container spacing={3}>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={3}>
                    <Left />
                </Grid>
                <Grid item xs={5}>
                    <Right />
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs={2}>
                </Grid>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={5}>
                    <Paper style={{height:500}}>
                        <Chart />
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Grid>
        </div>
    )
}

export default Wallets
