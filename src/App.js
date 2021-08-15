import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Wallets from './componets/wallets/wallets';
import Portfolio from './componets/portfolio/portfolio';

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
      backgroundColor: theme.palette.background.paper,
    },
    tabs: {
        height:60,fontSize:25, marginLeft:400,marginTop:10, color:'black', backgroundColor:'white'
    },
    tabPanel:{
        backgroundColor:'lightblue',
        height:'100vh'
    },
  }));

function App() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
    <div >
        <AppBar position="static" style={{backgroundColor:'white'}} elevation={0}>
            <Tabs className={classes.tabs} value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab  style={{fontSize:20}} label="WALLETS" {...a11yProps(0)} />
                <Tab  style={{fontSize:20}} label="PORTFOLIO" {...a11yProps(1)} />
                <Tab  style={{fontSize:20}} label="BORROW" {...a11yProps(2)} />
                <Tab  style={{fontSize:20}} label="SETTINGS" {...a11yProps(3)} />
            </Tabs>
        </AppBar>
            <TabPanel className={classes.tabPanel} value={value} index={0}>
             <Wallets />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={1}>
            <Portfolio />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={3}>
                Item Three
            </TabPanel>
    </div>
    )
}

export default App
