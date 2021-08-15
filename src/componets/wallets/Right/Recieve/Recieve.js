import React,{ Suspense }  from 'react';
import Grid from '@material-ui/core/Grid';
import {useDispatch, useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


const QR = React.lazy(() => import('./QR'));

function Recieve() {
    // const dispatch = useDispatch()
    // let posts=''
    const posts = useSelector(state => state.posts)
    console.log(posts)
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <p style={{color:'blue', fontWeight:'bold'}}>{posts.name}</p>
                    <Suspense fallback={<p>Loading...</p>}>
                        <QR value={posts.address}/>
                    </Suspense>
                    {/* <QRCode value={posts.address} /> */}
                </Grid>
                <Grid item xs={9}>
                    <p style={{marginTop:50}}>Wallet Balanace:</p>
                    <p style={{fontWeight:'bold'}}>{posts.amount}  {posts.id}</p>
                    <p>Wallet Addres:</p>
                    <p style={{fontWeight:'bold'}}>{posts.address}</p>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Button variant='outlined' color='primary'>Send</Button>
                    <Button variant='outlined' color='primary'>History</Button>
                    <Button variant='contained' color='primary'>Exchange</Button>
                    <Button variant='contained' color='primary'>Buy</Button>
                    </div>

                   
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Recieve
