import React, {useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import useStyles from './Styles';
import SearchIcon from '@material-ui/icons/Search';
import SortIcon from '@material-ui/icons/Sort';
import SettingsIcon from '@material-ui/icons/Settings';
import data from './../../../data/data';
import {useDispatch} from 'react-redux';
import {getId } from './../../../actions/posts'



    

function Left() {
    const classes = useStyles();
    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getId({
      name: 'Bitcoin',
      id: 'bitcoin',
      amount: 0,
      img: '/btc.png',
      address: 'ewohwwfhiowufhwioufhwiuehf',
      PublicKey: '345543245433er3er3erferfrewer'
     }))
  }, [dispatch])

    return (
        <div>
            <Paper className={classes.paper}>
              <div style={{padding:20}}>
                <span style={{fontSize:30, fontWeight:'bold'}}>0.00</span>
                <div style={{float:'right'}}> 
                  <SearchIcon fontSize='large' style={{marginRight:10}}/>
                  <SortIcon fontSize='large' style={{marginRight:10}}/>
                  <SettingsIcon fontSize='large' />
                </div>
              </div>
              <Divider />
              {data.map((item)=>(
                <div className={classes.item} onClick={()=>dispatch(getId(item))}>
                <img src={item.img} alt='img' style={{width:30}}/>
                <span style={{marginLeft:10, fontWeight:'bold'}}>{item.name}<sup style={{color:'grey', fontSize:9}}>{item.id}</sup></span>
                <span style={{marginLeft:'auto'}}>{item.amount}</span>
                
                </div>
                
              ))}
            </Paper>
        </div>
    )
}

export default Left
