import React from "react";
import { Box, Button, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const ProductButton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Button
        variant="outlined"
        size="small"
        sx={{ padding: "2px", minWidth: "unset" }}
      >
        <RemoveIcon />
      </Button>
      <Typography>0</Typography>
      <Button
        variant="outlined"
        size="small"
        sx={{ padding: "2px", minWidth: "unset" }}
      >
        <AddIcon />
      </Button>
    </Box>
  );
};

export default ProductButton;
