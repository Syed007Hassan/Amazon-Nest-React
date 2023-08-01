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

const RegistrationForm: FC = () => {
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted");
  };

  return (
    <Box
      sx={{
        border: 1,
        padding: 2,
        borderColor: "#cccccc",
        width: "350px",
        marginTop: 2,
      }}
    >
      <form onSubmit={onSubmitHandler}>
        <Grid container direction={"column"} justifyContent={"flex-start"}>
          <Typography variant="h5" component={"h4"} color="initial">
            Create an account
          </Typography>

          <TextField
            type="text"
            sx={{
              borderColor: "black",
              fontWeight: 500,
              marginTop: 2,
              marginBottom: 1,
              color: "black",
            }}
            id="name"
            label="Name"
            variant="outlined"
          />
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
            label="Re-enter Password"
            variant="outlined"
            placeholder="At least 8 characters"
            size="small"
          />
          <Button
            variant="contained"
            type="submit"
            style={{
              marginTop: "16px",
              height: "31px",
              backgroundColor: "#f0c14b",
              color: "black",
              fontWeight: 700,
              borderColor: "#a88734 #9c7e31 #846a29",
              textTransform: "none",
            }}
          >
            Register
          </Button>
        </Grid>
      </form>
      <div style={{ marginTop: "8px" }}>
        <small>
          By creating an account, you agree to Amazon's{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            {""}Conditions of use
          </a>{" "}
          and {""}
          <a href="#" style={{ textDecoration: "none" }}>
            privacy policy{" "}
          </a>
        </small>
      </div>

      <Divider
        sx={{
          marginTop: "36px",
          marginBottom: "16px",
        }}
      />
      <small>
        Already have an account?{" "}
        <Link to="/signin" style={{ textDecoration: "none", color: "#0000ee" }}>
          Sign in
        </Link>
      </small>
      <div>
        <small>
          Buying for work{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            {" "}
            Create a free business account
          </a>{" "}
        </small>
      </div>
    </Box>
  );
};

export default RegistrationForm;
