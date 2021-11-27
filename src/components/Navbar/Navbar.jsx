import React from "react";
import{ AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core';
import { ShoppingCart } from "@material-ui/icons";
import logo from '../../assets/commerce.jpg';
import useStyles from './styles';

const Navbar =({totalItems}) => {
    const classes= useStyles();
return(
    <AppBar position ='fixed' className={classes.appBar} colour ="inherit">
        <Toolbar>
            <Typography varient ="h6" className= {classes.title} colour = "inherit">
                <img src={logo} alt ="Commerce.js" height='25px' className = {classes.image}/>
                FRESH GROCERY
            </Typography>
            <div className ={classes.grow}/>
            <div className={classes.button}>
                <IconButton aria-label ='Show cart' colour="inherit">
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