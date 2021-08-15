import React,{useState, Suspense} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Plot = React.lazy(() => import('./Plot'));

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
function Chart() {
    const classes = useStyles();
    const [value2, setValue2] = useState(2)
    
    
    const handleChange = (event, newValue) => {
        setValue2(newValue);
      };

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

    return (
        <div>
            <AppBar position="static" className={classes.appbar} elevation={0}>
                <Tabs  classes={{root:classes.tabs}} value={value2} onChange={handleChange} aria-label="simple tabs example">
                    <Tab  classes={{root:classes.tab}} label="YEAR" {...a11yProps(0)} />
                    <Tab  classes={{root:classes.tab}} label="MONTH" {...a11yProps(1)} />
                    <Tab  classes={{root:classes.tab}} label="WEEK" {...a11yProps(2)} />
                    <Tab  classes={{root:classes.tab}} label="DAY" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <Divider />
        <TabPanel className={classes.tabPanel} value={value2} index={0}>
        
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value2} index={1}>
           
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value2} index={2}>
               
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value2} index={3}>
            
            </TabPanel>
            <Suspense fallback={<div>Loading...</div>}>
            <Plot butt={value2}/>
            </Suspense>
        </div>
    )
}

export default Chart
