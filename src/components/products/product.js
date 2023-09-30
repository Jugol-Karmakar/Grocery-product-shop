import React from "react";

const product = () => {
  return (
    <Container sx={{ backgroundColor: "#f6f9fc" }}>
      <Grid container spacing={3}>
        <Grid item md={3}>
          <ProductSidebar />
        </Grid>
        <Grid item container sm={9} spacing={3}>
          {PRODUCTS.map((product) => (
            <Grid item md={4} key={product._id}>
              <ProductCards product={product} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default product;
