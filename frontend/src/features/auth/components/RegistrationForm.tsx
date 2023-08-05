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
import useInput from "../../../hooks/use-input";
import { validateNameLength } from "../../../shared/utils/validation/length";

const RegistrationForm: FC = () => {
  const {
    value: name,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameClearHandler,
  } = useInput(validateNameLength);

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
            Create an account
          </Typography>

          <TextField
            value={name}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            error={nameHasError}
            helperText={nameHasError ? "Enter your name" : null}
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
      <Divider style={{ marginTop: "13px" }} />
      <div style={{ marginTop: "13px" }}>
        <small>
          Already have an account?{" "}
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "#0000ee" }}
          >
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
      </div>
    </Box>
  );
};

export default RegistrationForm;
