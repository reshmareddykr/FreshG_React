import React from "react";
import{ AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core';
import { ShoppingCart , HomeRounded } from "@material-ui/icons";
import logo from '../../assets/commerce.jpg';
//import {Link} from 'react-router-dom';
import useStyles from './styles';

const Navbar =({totalItems}) => {
    const classes= useStyles();
return(
    <AppBar position ='fixed' className={classes.appBar} >
        <Toolbar>
        <div >
                <IconButton herf ="/" aria-label = "Home button">
                    <HomeRounded/>
                </IconButton>
            </div>
            <Typography varient ="h6" className= {classes.title}>
                <img src={logo} alt ="Commerce.js" height='25px' className = {classes.image}/>
                FRESH GROCERY
            </Typography>
            <div className ={classes.grow}/>
            <div className={classes.button}>                
                <IconButton href ="/cart" aria-label ="Show cart">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
            </div>
        </Toolbar>
    </AppBar>
)
}
export default Navbar;