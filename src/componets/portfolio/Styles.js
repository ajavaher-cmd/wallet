
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      color: theme.palette.text.secondary,
      height: 400
    },
    item: {
        display:'flex', 
        flexDirection:'row', 
        alignItems: 'center',
         
        padding:20,
        '&:hover':{
            backgroundColor:'lightblue',
        }
    }
  }));


