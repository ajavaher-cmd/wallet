import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import data, { walletAmountHistory } from '../../data/data';
import Left from './Left';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';



function Portfolio() {
    const [stack, setStack] = useState([walletAmountHistory])
    console.log(stack)
    function convertData(stack) {
        let data0=[];
        for (let i = 0; i < stack.length; i++) {
            
           let m={...stack[i]};
            console.log(m)
            m.date=moment.unix(stack[i].date).format('MM/DD') 
            console.log(m)
            data0.push(m)
        }
        
        return data0
    }

    useEffect(() => {
        setStack(walletAmountHistory)
    }, [])
    console.log(convertData(stack))
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Paper style={{width:'100%', height:300, display:'flex',}}>
                        <Left />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper style={{ height:300, display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
                    <h2>Wallet Amount Distribution</h2>
                    <PieChart width={300} height={230}>
                    <Tooltip />
                        {/* <Pie data={data} dataKey="amount" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" /> */}
                        <Pie data={data} dataKey="amount" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    </PieChart>
                </Paper>
                </Grid>
                <Grid item xs={8}>
                    
                </Grid>
                <Grid item xs={4}>
                <Paper style={{ height:500, display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
                
                    <h2>Wallet Amount Distribution</h2>
                <AreaChart
                width={500}
                height={400}
                data={convertData(stack)}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="BTC" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="ETH" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="LSK" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
                </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Portfolio
