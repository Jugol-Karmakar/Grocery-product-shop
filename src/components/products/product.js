import {
  Box,
  Button,
  Container,
  Grid,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "./product-card";
import heroImage1 from "../../images/hero-image1.avif";
import { Search } from "@mui/icons-material";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
            <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>
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
              border: "2px solid transparent",
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
            {products.map((product) => (
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
