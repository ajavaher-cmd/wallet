import React,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import History from './History/History';
import Recieve from './Recieve/Recieve';
import Send from './Send/Send';
import Exchange from './Exchange/Exchange';
import { useSelector} from 'react-redux';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
    //   padding: theme.spacing(2),
    //   textAlign: 'center',
      color: theme.palette.text.secondary,
      height:350
    },
      tabs: {
        fontSize:10, color:'black', 
      },
      tabPanel:{
          backgroundColor:'white',
          height:'100%',
      },
      appbar:{
          backgroundColor:'white'
      },
      tab:{
          fontSize:15, width:50, maxWidth:50, minWidth:120
      }
  }));

function Right() {
    const classes = useStyles();
    const [value1, setValue] = React.useState(1);
    const posts = useSelector(state => state.posts);

    useEffect(() => {
        setValue(1)
    }, [posts])

  console.log(value1)
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div>
            <Paper className={classes.paper}>
            <AppBar position="static" className={classes.appbar} elevation={0}>
                <Tabs  classes={{root:classes.tabs}} value={value1} onChange={handleChange} aria-label="simple tabs example">
                    <Tab  classes={{root:classes.tab}} label="HISTORY" {...a11yProps(0)} />
                    <Tab  classes={{root:classes.tab}} label="RECIEVE" {...a11yProps(1)} />
                    <Tab  classes={{root:classes.tab}} label="SEND" {...a11yProps(2)} />
                    <Tab  classes={{root:classes.tab}} label="EXCHANGE" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <Divider />
        <TabPanel className={classes.tabPanel} value={value1} index={0}>
             <History />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value1} index={1}>
            <Recieve />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value1} index={2}>
                <Send />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value1} index={3}>
            <Exchange />
            </TabPanel>
            
            </Paper>
        </div>
    )
}
export default Right
