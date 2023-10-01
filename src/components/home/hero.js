import React from "react";
import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import heroImage1 from "../../images/hero-image1.avif";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Hero = () => {
  const HERO_ITEM = [
    {
      id: 1,
      image: heroImage1,
      title: "Hero Product One",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat sed aut numquam ratione sunt porro consectetur enim, expedita accusamus.",
    },
    {
      id: 2,
      image: heroImage1,
      title: "Hero Product Two",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat sed aut numquam ratione sunt porro consectetur enim, expedita accusamus.",
    },
    {
      id: 3,
      image: heroImage1,
      title: "Hero Product Three",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat sed aut numquam ratione sunt porro consectetur enim, expedita accusamus.",
    },
  ];
  return (
    <Container
      component="section"
      maxWidth={false}
      disableGutters
      sx={{ backgroundColor: "#EEEFEF" }}
    >
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={10}
        totalSlides={3}
        infinite
        isPlaying
        interval={5000}
      >
        <Slider>
          {HERO_ITEM.map((item, index) => {
            return (
              <Slide
                index={0}
                key={index}
                style={{
                  minHeight: "450px",
                  px: 10,
                }}
              >
                <Container maxWidth="lg" sx={{ height: "100%" }}>
                  <Grid container sx={{ height: "100%" }}>
                    <Grid item md={7}>
                      <Box
                        maxWidth={450}
                        sx={{
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          component="h2"
                          fontWeight={700}
                          sx={{
                            fontSize: 42,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 18,
                            mt: 2,
                          }}
                        >
                          {item.intro}
                        </Typography>
                        <Box sx={{ width: "100%", mt: 3 }}>
                          <Button
                            startIcon={<ShoppingCartIcon />}
                            size="large"
                            variant="contained"
                            disableElevation
                          >
                            Buy Now
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item md={5}>
                      <Box
                        sx={{
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Image
                          width={500}
                          height={400}
                          src={item.image}
                          alt="hero-image"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Container>
              </Slide>
            );
          })}
        </Slider>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            "& .carousel__dot": {
              backgroundColor: "#c3c4ca",
              border: "1px",
              width: "9px",
              height: "9px",
              margin: "0px 4px",
              padding: "0px",
              borderRadius: "50%",
            },
            "& .carousel__dot--selected": {
              width: "20px",
              height: "8px",
              borderRadius: "10px",
              backgroundColor: "#6267a1",
            },
          }}
        >
          <DotGroup
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          />
        </Box>
      </CarouselProvider>
    </Container>
  );
};

export default Hero;
