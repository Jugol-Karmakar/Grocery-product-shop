import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingX: "20px",
          paddingY: "14px",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid email",
              },
            })}
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email or phone number"
            name="email"
            autoComplete="email"
            autoFocus
            placeholder="example@gmail.com"
            multiline
            size="small"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required",
              },
              minLength: {
                value: 6,
                message: "Must be 6 characters or longer",
              },
            })}
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder="*********"
            multiline
            size="small"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ textTransform: "capitalize", fontSize: "16px", py: 1 }}
          >
            Login
          </Button>
        </form>
        <Typography>or</Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{
            textTransform: "capitalize",
            fontSize: "16px",
            py: 1,
            marginBottom: "10px",
          }}
        >
          <FcGoogle
            style={{
              marginRight: "5px",
              backgroundColor: "white",
              padding: "5px",
              borderRadius: "50px",
              fontSize: "16px",
            }}
          />
          Continue with Google
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{
            textTransform: "capitalize",
            fontSize: "16px",
            py: 1,
            backgroundColor: "#3b5998",
          }}
        >
          <FaFacebook
            style={{
              marginRight: "5px",
              backgroundColor: "white",
              color: "#3b5998",
              padding: "5px",
              borderRadius: "50px",
              fontSize: "16px",
            }}
          />
          Continue with Facebook
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
