import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";

import { BACKEND_ENDPOINT } from "../../constants/constant";
import useStyles from "./styles";
import { addItem } from "../../actions/cart";

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    event.preventDefault();
    dispatch(addItem(product));
  };

  return (
    <Link to={`/product/${product.id}`} className={classes.link}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          image={`${BACKEND_ENDPOINT}/img/products/${product.imageCover}`}
          alt={product.name}
          className={classes.image}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" className={classes.productName}>
            {product.name}
          </Typography>
          <Typography variant="body2" className={classes.productFeatures}>
            {product.features.map((feature) => `${feature} `)}
          </Typography>
          <Box className={classes.priceContainer}>
            {product.discount ? (
              <>
                <Typography variant="body1" className={classes.discountPrice}>
                  ₹
                  {(
                    product.price -
                    (product.price * product.discount) / 100
                  ).toFixed(2)}
                </Typography>
                <Typography variant="body2" className={classes.originalPrice}>
                  ₹{product.price}
                </Typography>
                <Box className={classes.discountBox}>
                  {product.discount}% OFF
                </Box>
              </>
            ) : (
              <Typography variant="body1" className={classes.price}>
                ₹{product.price}
              </Typography>
            )}
          </Box>
          <Button
            variant="contained"
            className={classes.addToCartButton}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
