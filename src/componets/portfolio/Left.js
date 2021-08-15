import React, {useEffect, useState} from 'react'
import data from '../../data/data';
import useStyles from './Styles';
import axios from 'axios';


function Left() {
    const classes = useStyles();
    
    const [price, setPrice] = useState([]);
    const [chart, setChart] = useState([])
   

    // function currentPrice(id) {
            
    //         return axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`).then(res=>{
    //           res.data
        
            
    //     })   

    // }
    // console.log(currentPrice('bitcoin')) ;
    
//    useEffect(() => {
//     axios.all(data.map((item)=>axios.get(`https://api.coingecko.com/api/v3/coins/${item.id}`).then((res)=>
//     setPrice(price=>[...price,res.data])
//     )))
//    }, [])
   
//    useEffect(() => {
//     Promise.all(data.map((item)=>axios.get(`https://api.coingecko.com/api/v3/coins/${item.id}/market_chart?vs_currency=usd&days=7`).then((res)=>
//     setChart(chart=>[...price,res.data])
//     )))
//    }, [])
    
//    useEffect(() => {
//     axios.all(data.map((item)=>axios.get(`https://api.coingecko.com/api/v3/coins/${item.id}`,
//     data.map((item)=>axios.get(`https://api.coingecko.com/api/v3/coins/${item.id}/market_chart?vs_currency=usd&days=7`))))).then(axios.spread((...res)=>{
//         const res1=res[0]
//         const res2 =res[1]
//         console.log(res2)
//         setPrice(res);
//         setChart(chart=>[...chart,res[1].data])
//     }))
//    }, [])

   useEffect(() => {

    for (let i = 0; i < data.length; i++) {
        axios.get(`https://api.coingecko.com/api/v3/coins/${data[i].id}`).then(res=>{
            setPrice(price=>[...price,res])
            return axios.get(`https://api.coingecko.com/api/v3/coins/${data[i].id}/market_chart?vs_currency=usd&days=7`).then(res=>{
                setChart(chart=>[...chart,res])
            })
        })
        
    }
       
   }, [])

   useEffect(() => {
        for (let i = 0; i < data.length; i++) {
            axios.get(`https://api.coingecko.com/api/v3/coins/${data[i].id}/market_chart?vs_currency=usd&days=7`).then(res=>{
                setChart(chart=>[...chart,res])
            })
            
        }
   }, [])

   useEffect(() => {
    axios.get(` https://api.coingecko.com/api/v3/coins/list`).then(res=>{
        console.log(res)
   })
   
   }, [])
   
   console.log(chart)
    return (
       
        <div >
            {price.map((item)=>(
                <div className={classes.item} >
                <img src={item.data.image.small} alt='img' vstyle={{width:30, position: 'relative', left:1}}/>
                <span style={{marginLeft:10, fontWeight:'bold'}}>{item.data.name}  </span>
                <span style={{position:'absolute',left:200}}> {item.data.id}</span>
                <span style={{position:'absolute',left:350}}>{item.data.market_data.current_price.usd}</span>
                <span style={{position:'absolute',left:500}}>{(item.data.market_data.price_change_percentage_1h_in_currency.usd).toFixed(2)}</span>
                <span style={{position:'absolute',left:650}}>{(item.data.market_data.price_change_24h*100/item.data.market_data.current_price.usd).toFixed(2)}</span>
                <span style={{position:'absolute',left:800}}>{item.data.market_data.price_change_percentage_7d.toFixed(2)}</span>
                
                
                
                </div>
                
              ))}
        </div>
    )
}

export default Left
