import React from 'react';
import{AppBar,Toolbar } from "@material-ui/core";
import Typograghy from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    nav: {
      background: 'rgba(255, 0, 0, 0.9);',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      fontSize:'10px',
      height: 80,
      padding: '0 30px',
    },
  });
const Navbar = () =>{
    const classes = useStyles();
    return(
        <div>
            <AppBar className={classes.nav} >
                <Toolbar>
                    <Typograghy variant="h4"  >
                        Tic Tac Toe
                    </Typograghy>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Navbar;
