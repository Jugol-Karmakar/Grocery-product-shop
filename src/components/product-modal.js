import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Image from "next/image";
import { NumericFormat } from "react-number-format";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductModal = ({ product, open, handleClose }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count - 1 >= 0);
  };
  const decrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 5,
              padding: "20px 24px",
            }}
          >
            <Grid item md={6}>
              <Box>
                <Image src={product.images} alt="product-image" width={400} />
              </Box>
            </Grid>
            <Grid item md={6} sx={{ position: "relative" }}>
              <Box sx={{ position: "absolute", right: 0, top: 0 }}>
                <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: "25px", fontWeight: 700, lineHeight: 1.5 }}
                >
                  {product.name}
                </Typography>
                <Typography
                  sx={{
                    marginBottom: 0,
                    py: "8px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#aeb4be",
                  }}
                >
                  {product.category}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "4px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#4E97FD",
                      fontWeight: 700,
                      fontSize: "30px",
                    }}
                  >
                    $
                    <NumericFormat
                      thousandsGroupStyle="thousand"
                      thousandSeparator=","
                      displayType="text"
                      value={product.discountPrice}
                    />
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 200,
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Rating
                    size="small"
                    name="read-only"
                    value={product.rating}
                    precision={0.5}
                    readOnly
                  />
                  <Typography sx={{ ml: 1, color: "#7d879c", fontSize: 14 }}>
                    ({product.rating})
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    marginTop: "16px",
                    marginBottom: "16px",
                    fontSize: "14px",
                  }}
                >
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus liberpuro ate
                  vol faucibus adipiscing.
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "4px",
                    cursor: "pointer",
                    textTransform: "capitalize",
                    fontWeight: 600,
                    height: "45px",
                    paddingX: "2.5rem",
                    paddingY: "0.6rem",
                    fontSize: "16px",
                  }}
                >
                  Add To Cart
                </Button>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    onClick={increment}
                    variant="outlined"
                    size="small"
                    sx={{ padding: "8px", minWidth: "unset" }}
                  >
                    <RemoveIcon />
                  </Button>
                  <Typography>{count}</Typography>
                  <Button
                    onClick={decrement}
                    variant="outlined"
                    size="small"
                    sx={{ padding: "8px", minWidth: "unset" }}
                  >
                    <AddIcon />
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductModal;
