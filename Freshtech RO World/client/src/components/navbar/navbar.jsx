import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  Badge,
  Drawer,
  Popover,
  Box,
  Button,
} from "@mui/material";
import { ShoppingCart, Person, Close } from "@mui/icons-material";

import Cart from "../cart/cart";
import useStyles from "./styles"; 

import logo from "../../assets/icons/logo.png";
import { PHONE } from "../../constants/constant";

const Navbar = () => {
  const classes = useStyles(); 
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.items);
  const cartItemsQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Toggle drawer
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Handle profile icon click
  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close popover
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    alert("Proceed to Login");
  };

  const handleLogout = () => {
    alert("Proceed to Logout");
  };

  // Open state for popover
  const popoverOpen = Boolean(anchorEl);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {/* Left Section - Logo & Company Name */}
        <div className={classes.logoContainer}>
          <img src={logo} alt="Logo" className={classes.logo} />
          <Typography variant="h6" className={classes.companyName}>
            Freshtech RO World
          </Typography>
        </div>

        {/* Middle Section - Search Input */}
        <TextField
          variant="outlined"
          placeholder="Search Product"
          size="small"
          className={classes.searchInput}
        />

        {/* Right Section - Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Typography variant="body1" className={classes.phoneText}>
            📞 +91 {PHONE}
          </Typography>

          {/* Profile Icon - Opens Popover */}
          <IconButton
            color="inherit"
            onClick={handleProfileClick}
            className={classes.iconButton}
          >
            <Person />
          </IconButton>

          {/* Shopping Cart Icon */}
          <IconButton
            color="inherit"
            onClick={toggleDrawer(true)}
            className={classes.iconButton}
          >
            <Badge badgeContent={cartItemsQuantity} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>

      {/* Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Cart toggleDrawer={toggleDrawer} />
      </Drawer>

      {/* Popover for Profile Icon */}
      <Popover
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        disableScrollLock
        className={classes.popoverBlock}
      >
        <Box className={classes.popoverContent}>
          {/* Header with Greeting & Close Button */}
          <Box className={classes.header}>
            <Typography variant="body1" className={classes.greetingText}>
              Hi, {user ?  user.name : 'there'}!
            </Typography>
            <IconButton size="small" className={classes.closeButton} onClick={handlePopoverClose}>
              <Close fontSize="small" />
            </IconButton>
          </Box>

          {isLoggedIn && (
            <>
              {/* Manage Order Link */}
              <Typography className={classes.menuItem}>
                <Link to="/orders" style={{ textDecoration: "none", color: "inherit" }}>
                  Manage Your Order
                </Link>
              </Typography>

              {/* Account Link */}
              <Typography className={classes.menuItem}>
                <Link to="/account" style={{ textDecoration: "none", color: "inherit" }}>
                  Account
                </Link>
              </Typography>
            </>
          )}

          {/* Logout Button */}
          {isLoggedIn ? (
              <Button variant="contained" className={classes.logoutButton} onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button variant="contained" className={classes.logoutButton} onClick={handleLogin}>
                Login
              </Button>
            )
          }
           
        </Box>
      </Popover>
    </AppBar>
  );
};

export default Navbar;