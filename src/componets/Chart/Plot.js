import React, {useState,useEffect} from 'react';
import { AreaChart,Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {useSelector} from 'react-redux';
import axios from 'axios';
import moment from 'moment';

function Plot({butt=1}) {
    const [data, setData] = useState([]);
    const posts = useSelector(state => state.posts);
    console.log(posts);

    function convertVal(val) {
        if (val===0)
        return 365
        if (val===1)
        return 30
        if (val===2)
        return 7
        if (val===3)
        return 1
    }

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=91`).then(res=>(
            setData(convert(res.data.prices))
        ))
    }, [])

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${posts.id.toLowerCase()+'/'}market_chart?vs_currency=usd&days=${convertVal(butt)}`).then(res=>(
        setData(convert(res.data.prices))
    ))
    }, [posts,butt])

    function convert(arr) {
        let m=[]
        for (let i = 0; i < arr.length; i++) {
            const l={}
            const u = arr[i];
            l['Time']=moment.unix(u[0]/1000).format('MM/DD');
            l['Price']=u[1]
            m.push(l)
            console.log(m)
        }
        return m
    }

    return (
        <div>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <AreaChart
          width={700}
          height={350}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Time" minTickGap={15}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="Price" stroke="#8884d8" activeDot={{ r: 8 }} />
        </AreaChart>
      {/* </ResponsiveContainer> */}
        </div>
    )
}

export default Plot
