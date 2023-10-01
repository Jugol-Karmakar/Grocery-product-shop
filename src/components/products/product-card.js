import { Box, Card, CardContent, Rating, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NumericFormat } from "react-number-format";
import ProductButton from "./product-button";
import ProductModal from "../product-modal";

const ProductCard = ({ product }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card
        sx={{ borderRadius: "10px", position: "relative" }}
        onClick={handleClickOpen}
      >
        <Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
          <Image
            src={product.images}
            alt="product-image"
            width={290}
            height={200}
          />
        </Box>

        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            height: 115,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                mb: 1,
              }}
            >
              {product.name}
            </Typography>
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
                  fontWeight: 600,
                  fontSize: "16px",
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
              <Typography
                sx={{
                  color: "#7d879c",
                  fontSize: "16px",
                  fontWeight: 600,
                  textDecoration: "line-through",
                }}
              >
                $
                <NumericFormat
                  thousandsGroupStyle="thousand"
                  thousandSeparator=","
                  displayType="text"
                  value={product.regularPrice}
                />
              </Typography>
            </Box>
          </Box>
          <ProductButton />
        </CardContent>
      </Card>
      <ProductModal
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
        setOpen={setOpen}
        product={product}
      />
    </>
  );
};

export default ProductCard;
