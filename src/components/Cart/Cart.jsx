import React from 'react'
import { Container,Typography, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({cart, handleUpdateCartQty , handleRemoveFromCart , handleEmptyCart }) =>{
    const classes = useStyles();
    const EmptyCart = () =>(
        <Typography variant ="subtitle2"> Empty Cart</Typography>
    )
    const FilledCart = () =>(
        <>
        <Grid container spacing ={4}>
            {cart.line_items.map ((item) =>(
                <Grid item sm={4} key = {item.id}>
                    <CartItem item = {item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart = {handleRemoveFromCart}/>
                </Grid>
            ))}
        </Grid>
        
        <div className = {classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: { cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type ="button" variant ="contained" colour="secondary" onClick={handleEmptyCart}> Clear Cart </Button>
                    <Button className={classes.checkoutButton} size="large" type ="button" variant ="contained" colour="primary"> Check Out </Button>
                    
                    </div>
                         
        </div>
        </>
    );
    if(!cart.line_items) return '..Loading...';
    
    return (
        <Container>
            
            <div className = {classes.toolbar}></div>
            <Typography className = {classes.title} varient ="h2" gutterBottom> Cart Items</Typography>
            { !cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
            
        </Container>
    )
}
export default Cart