import {
  Box,
  Button,
  Container,
  Grid,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ProductCard from "./product-card";
import heroImage1 from "../../images/hero-image1.avif";
import { Search } from "@mui/icons-material";

const Product = () => {
  const PRODUCTS = [
    {
      _id: 1,
      name: "Iphone 13 Pro Max",
      regularPrice: 2323,
      discountPrice: 1223,
      images: heroImage1,
      brand: "Apple",
      rating: 4.5,
      category: "Electronic",
    },
    {
      _id: 2,
      name: "Iphone 13 Pro Max",
      regularPrice: 2323,
      discountPrice: 1223,
      images: heroImage1,
      brand: "Apple",
      rating: 4.5,
      category: "Electronic",
    },
    {
      _id: 3,
      name: "Iphone 13 Pro Max",
      regularPrice: 2323,
      discountPrice: 1223,
      images: heroImage1,
      brand: "Apple",
      rating: 4.5,
      category: "Electronic",
    },
    {
      _id: 4,
      name: "Wireless Bluetooth Headphone",
      regularPrice: 2323,
      discountPrice: 1223,
      images: heroImage1,
      brand: "Xiaomi",
      rating: 4.5,
      category: "Electronic",
    },
    {
      _id: 5,
      name: "Earbirds Headphone",
      description: "string",
      regularPrice: 2323,
      discountPrice: 1223,
      images: heroImage1,
      brand: "Xiaomi",
      rating: 4.5,
      category: "Electronic",
    },
    {
      _id: 6,
      name: "Wireless Headphone",
      regularPrice: 2323,
      discountPrice: 1223,
      images: heroImage1,
      brand: "Xiaomi",
      rating: 4.5,
      category: "Electronic",
    },
    {
      _id: 7,
      name: "Nokia Andriod",
      regularPrice: 2323,
      discountPrice: 1223,
      images: heroImage1,
      brand: "Nokia",
      rating: 4.5,
      category: "Electronic",
    },
    {
      _id: 8,
      name: "Nokia Andriod",
      regularPrice: 2323,
      discountPrice: 1223,
      images: heroImage1,
      brand: "Nokia",
      rating: 4.5,
      category: "Electronic",
    },
    {
      _id: 9,
      name: "Nokia Andriod",
      regularPrice: 2323,
      discountPrice: 1223,
      images: heroImage1,
      brand: "Nokia",
      rating: 4.5,
      category: "Electronic",
    },
    {
      _id: 10,
      name: "Classic Rolex Watch",
      regularPrice: 2323,
      discountPrice: 1223,
      images: heroImage1,
      brand: "Rolex",
      rating: 4.5,
      category: "Fashion",
    },
    {
      _id: 11,
      name: "Classic Rolex Watch",
      regularPrice: 2323,
      discountPrice: 1223,
      images: heroImage1,
      brand: "Rolex",
      rating: 4.5,
      category: "Fashion",
    },
    {
      _id: 12,
      name: "Classic Rolex Watch",
      regularPrice: 2323,
      discountPrice: 1223,
      images: heroImage1,
      brand: "Rolex",
      rating: 4.5,
      category: "Fashion",
    },
    {
      _id: 13,
      name: "Black Sunglass",
      regularPrice: 2323,
      discountPrice: 1223,
      images: heroImage1,
      brand: "",
      rating: 4.5,
      category: "Fashion",
    },
    {
      _id: 14,
      name: "Matt Sunglass",
      regularPrice: 2323,
      discountPrice: 1223,
      images: heroImage1,
      brand: "",
      rating: 4.5,
      category: "Fashion",
    },
    {
      _id: 15,
      name: "Black Sunglass",
      regularPrice: 2323,
      discountPrice: 1223,
      images: heroImage1,
      brand: "",
      rating: 4.5,
      category: "Fashion",
    },
    {
      _id: 16,
      name: "Sport Shoes",
      regularPrice: 2323,
      discountPrice: 1223,
      images: heroImage1,
      brand: "Xiaomi",
      rating: 4.5,
      category: "Fashion",
    },
  ];
  return (
    <Box sx={{ backgroundColor: "#f6f9fc" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 3,
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
              Our Product
            </Typography>
          </Box>
          <Paper
            elevation={0}
            component="form"
            sx={{
              // p: "2px 4px",
              display: "flex",
              alignItems: "center",
              border: "1px solid rgb(227, 233, 249)",
              borderRadius: 1200,
              height: "44px",
              overflow: "hidden",
              width: "50%",
              "&:focus-within": {
                border: "2px solid",
                borderColor: "primary.main",
              },
            }}
          >
            <Box
              sx={{
                p: "10px",
                paddingRight: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              aria-label="menu"
            >
              <Search sx={{ color: "text.secondary", fontSize: 20 }} />
            </Box>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search any product..."
              inputProps={{ "aria-label": "search google maps" }}
            />

            <Button
              disableElevation
              variant="contained"
              sx={{ height: "100%", borderRadius: 0, width: 130 }}
            >
              Search
            </Button>
          </Paper>
        </Box>

        <Grid container spacing={3}>
          <Grid item container spacing={3}>
            {PRODUCTS.map((product) => (
              <Grid item md={3} key={product._id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Product;
