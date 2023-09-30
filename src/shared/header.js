import React from "react";
import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

// import { HEADER_LINK } from "../../shared/constants/constants";
import SearchField from "./search-field";

const Header = () => {
  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Box sx={{ display: "flex", fontSize: 18, alignItems: "center" }}>
                <ShoppingCartIcon
                  sx={{
                    mr: 1,
                    color: "primary.main",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "text.primary",
                  }}
                  component="h1"
                  variant="h6"
                >
                  BigBazar
                </Typography>
              </Box>
            </Link>

            {/* search feild */}
            <SearchField />

            <Stack direction="row" spacing={3}>
              <Link href="/profile">
                <IconButton sx={{ backgroundColor: "#F3F5F9", p: 1.3 }}>
                  <PersonOutlineOutlinedIcon />
                </IconButton>
              </Link>

              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                badgeContent={
                  <Box
                    sx={{
                      backgroundColor: "primary.main",
                      color: "white",
                      p: 0.5,
                      width: 20,
                      height: 20,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 1200,
                      fontSize: 11,
                    }}
                  >
                    11
                  </Box>
                }
              >
                <IconButton
                  sx={{
                    backgroundColor: "#f3f5f9",
                    p: 1.3,
                  }}
                >
                  <ShoppingBagOutlinedIcon />
                </IconButton>
              </Badge>
            </Stack>
          </Toolbar>
          {/* <Stack
            display="flex"
            direction="row"
            justifyContent="flex-end"
            spacing={5}
            sx={{ py: 2 }}
          >
            {HEADER_LINK.map((link) => (
              <Link
                style={{ textDecoration: "none" }}
                key={link.id}
                href={link.route}
              >
                <Typography sx={{ fontSize: 15, color: "#121214" }}>
                  {link.name}
                </Typography>
              </Link>
            ))}
          </Stack> */}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
