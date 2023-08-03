import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import { FC, FormEvent } from "react";
import { Link } from "react-router-dom";

const SignInForm: FC = () => {
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted");
  };

  return (
    <>
      <Box
        sx={{
          border: 1,
          padding: 2,
          borderColor: "#cccccc",
          width: "350px",
          marginTop: 2,
          backgroundColor: "#ffffff",
          borderRadius: "4px",
          marginBottom: "16px",
        }}
      >
        <form onSubmit={onSubmitHandler}>
          <Grid container direction={"column"} justifyContent={"flex-start"}>
            <Typography
              variant="h5"
              component={"h4"}
              color="initial"
              sx={{ fontFamily: "Amazon Ember, sans-serif" }}
            >
              Sign In
            </Typography>
            <TextField
              type="email"
              sx={{
                borderColor: "black",
                fontWeight: 500,
                marginTop: 2,
                marginBottom: 1,
                color: "black",
              }}
              id="email"
              label="Email"
              variant="outlined"
            />
            <TextField
              type="password"
              sx={{
                borderColor: "black",
                fontWeight: 500,
                marginTop: 2,
                marginBottom: 1,
                color: "black",
              }}
              id="email"
              label="Password"
              variant="outlined"
              placeholder="At least 8 characters"
            />

            <Button
              variant="contained"
              type="submit"
              sx={{
                marginTop: "16px",
                height: "31px",
                backgroundColor: "#f0c14b",
                color: "#111111",
                fontWeight: 700,
                borderColor: "#a88734 #9c7e31 #846a29",
                textTransform: "none",
                fontSize: "14px",
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "#e3a600",
                },
              }}
            >
              Register
            </Button>
          </Grid>
        </form>
        <div style={{ marginTop: "10px" }}>
          <small>
            By continuing, you agree to Amazon's{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              {""}Conditions of use
            </a>{" "}
            and {""}
            <a href="#" style={{ textDecoration: "none" }}>
              privacy policy{" "}
            </a>
          </small>
        </div>
      </Box>
      <div style={{ marginTop: "16px" }}>
        <Divider>
          <small style={{ color: "#767676" }}>New to Amazon?</small>
        </Divider>

        <Link
          id="register-link"
          to="/register"
          style={{ textDecoration: "none", color: "#0000ee" }}
        >
          <Button
            variant="contained"
            style={{
              width: "100%",
              marginTop: "12px",
              height: "31px",
              backgroundColor: "#f1f1f1",
              color: "black",
              textTransform: "none",
            }}
          >
            Register
          </Button>
        </Link>
      </div>
    </>
  );
};

export default SignInForm;