import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import React, { FC, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import useInput from "../../../hooks/use-input";
import { validatePasswordLength } from "../../../shared/utils/validation/length";
import { validateEmail } from "../../../shared/utils/validation/email";
import { NewUser } from "./models/Newuser";

const SigninForm: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    value: email,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailClearHandler,
  } = useInput(validateEmail);

  const {
    value: password,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordClearHandler,
  } = useInput(validatePasswordLength);

  const clearForm = () => {
    emailClearHandler();
    passwordClearHandler();
    setIsSubmitted(false); // reset form submission status
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      setIsSubmitted(true); // set form submission status to true
      return;
    }

    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }

    console.log("submitting");

    const user = {
      email,
      password,
    };

    console.log(JSON.stringify(user) + " is signed in");
    clearForm();
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
            Sign in
          </Typography>

          <TextField
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            error={emailHasError && isSubmitted} // conditionally render error state
            helperText={
              emailHasError && isSubmitted ? "Enter a valid email" : null // conditionally render helper text
            }
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
            value={password}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            error={passwordHasError && isSubmitted} // conditionally render error state
            helperText={
              passwordHasError && isSubmitted ? "Enter a valid password" : null // conditionally render helper text
            }
            type="password"
            sx={{
              borderColor: "black",
              fontWeight: 500,
              marginTop: 2,
              marginBottom: 1,
              color: "black",
            }}
            id="password"
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
            Sign in
          </Button>
        </Grid>
      </form>
      <Divider style={{ marginTop: "13px" }} />
      <div style={{ marginTop: "13px" }}>
        <small>
          New to Amazon?{" "}
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "#0000ee" }}
          >
            Create an account
          </Link>
        </small>
      </div>
    </Box>
  );
};

export default SigninForm;
