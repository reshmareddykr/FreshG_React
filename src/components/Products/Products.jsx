import React from "react";
import {Grid,Typography, Button } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
/*{
const products = [
    {id:1,name:'shoe',description:'running shoe',price:'1000',image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80'},
    {id:2,name:'shoe',description:'jogging shoe',price:'2000',image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80'},
];}*/

const Products =({products, onAddtoCart, onUpdateCartQty}) => {
    const classes = useStyles();
    return(
<main className = {classes.content}>
    <div className = {classes.toolbar}/> 
    <Grid container justify ="center" spacing ={4}>
    
        {products.map((product) => (
        <Grid item key = {product.id} xs={12} md={4} lg={3}>
        <Product product = {product} onAddtoCart ={onAddtoCart} onUpdateCartQty ={onUpdateCartQty}/>
        </Grid>
        ))}
    </Grid>
</main>
)
}

export default Products;
