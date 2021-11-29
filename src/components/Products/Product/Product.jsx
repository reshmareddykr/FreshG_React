import React,{useState} from "react";
import {Card,CardMedia,CardContent,CardActions,Typography, IconButton, Button} from '@material-ui/core';
import { AddShoppingCart} from "@material-ui/icons";
import useStyles from './styles';

const Product = ({product ,onAddtoCart}) => {
    const classes = useStyles();
    const [quantity,setquantity] = useState(0);
    const incQuantity =() =>{
        setquantity(quantity+1);
    }
    const decQuantity =() =>{
        setquantity(quantity-1);
    }
    const [color,setColor] = useState('enabled');
    function ClickedOnce()
    {
        setColor('Secondary');
    }
    
    return (    

       <Card className = {classes.root}>
           <CardMedia className = {classes.media} image = {product.image.url} title={product.name}>
           </CardMedia>
           <CardContent >
                <div className = {classes.CardContent}>
                    <Typography varient="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography varient="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML ={{__html:product.description}}varient="body2" color="textSecondary"></Typography>
           </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
            <div className = {classes.buttons}>
                <Button type ='button' size = "small" onClick ={decQuantity}>-</Button>
                
                <Typography>{quantity}</Typography>
                <Button type ='button' size = "small" onClick ={incQuantity}>+</Button>
                </div>
                <IconButton aria-label = "Add to Cart" onClick = {() => onAddtoCart(product.id,quantity)}>
                    <AddShoppingCart color ={color} onClick={()=> ClickedOnce()}/>
                </IconButton>
            </CardActions>
       </Card>
    )
}

export default Product;