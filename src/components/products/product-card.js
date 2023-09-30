import { Box, Card, CardContent, Rating, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <>
      <Card sx={{ borderRadius: "10px", position: "relative" }}>
        <Link href={`/product-${product._id}`}>
          <Box sx={{ display: "flex", justifyContent: "center", height: 283 }}>
            <Image src={product.images} alt="product-image" width={290} />
          </Box>
        </Link>
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
            fontSize: "10px",
            paddingX: "10px",
            paddingY: "4px",
            backgroundColor: "#4E97FD",
            color: "white",
            borderRadius: "16px",
            fontWeight: 600,
          }}
        >
          25% off
        </Typography>
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
    </>
  );
};

export default ProductCard;
