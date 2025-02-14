import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  List,
  ListItem,
  Typography,
  Box,
  Button,
  Avatar,
  IconButton,
  Divider,
} from "@mui/material";
import { Close, Delete, Remove, Add, ShoppingCartOutlined } from "@mui/icons-material";

import { deleteItem, updateItem } from "../../actions/cart.js";
import useStyles from './styles';

import { BACKEND_ENDPOINT } from "../../constants/constant.js";

const Cart = ({ toggleDrawer }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const removeFromCart = (index) => {
      dispatch(deleteItem(index));
  };

  const updateQuantity = (index, newQuantity) => {
      dispatch(updateItem(index, newQuantity));
  };

  return (
    <div role="presentation" className={classes.drawer}>
      {/* Header Section */}
      <Box className={classes.header}>
        <Typography variant="h5">Your Cart</Typography>
        <IconButton onClick={toggleDrawer(false)} className={classes.iconButton}>
          <Close />
        </IconButton>
      </Box>

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <Box className={classes.emptyCart}>
          <ShoppingCartOutlined className={classes.cartIcon} />
          <Typography variant="h5" className={classes.emptyText}>
            Your cart is empty.
          </Typography>
        </Box>
      ) : (
        <>
          <List className={classes.cartList}>
            {cartItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem className={classes.cartItem}>
                  {/* Image */}
                  <Avatar src={`${BACKEND_ENDPOINT}/img/products/${item.image}`} alt={item.name} className={classes.itemImage} />

                  {/* Name, Price, and Color Box */}
                  <Box className={classes.itemContent}>
                    <Box className={classes.itemDetails}>
                      <Box className={classes.itemText}>
                        <Typography variant="body1" className={classes.itemName}>
                          {item.name}
                        </Typography>
                        <Typography variant="body2" className={classes.itemPrice}>
                          ₹{item.price.toFixed(2)}
                        </Typography>
                      </Box>
                      {/* Delete Icon */}
                      <IconButton onClick={() => removeFromCart(index)} className={`${classes.deleteButton} ${classes.iconButton}`} >
                        <Delete />
                      </IconButton>
                    </Box>

                    {/* Quantity Controls */}
                    <Box className={classes.itemDetails}>
                      <Typography className={classes.itemColorBox}>{item.color}</Typography>
                      <Box className={classes.quantityControls}>
                        <IconButton
                          className={`${classes.quantityButton} ${classes.iconButton}`}
                          onClick={() => updateQuantity(index, Math.max(1, item.quantity - 1))}
                        >
                          <Remove />
                        </IconButton>
                        <Typography variant="body1" className={classes.quantityText}>
                          {item.quantity.toString().padStart(2, "0")}
                        </Typography>
                        <IconButton
                          className={`${classes.quantityButton} ${classes.iconButton}`}
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                        >
                          <Add />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>

          {/* Checkout Button */}
          <Box className={classes.checkoutContainer}>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              className={classes.checkoutButton}
              onClick={() => alert("Proceed to Checkout")}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </div>
  );
};

export default Cart;