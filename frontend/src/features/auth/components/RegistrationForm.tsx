import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";
import React, { FC, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../../hooks/use-input";
import {
  validateNameLength,
  validatePasswordLength,
} from "../../../shared/utils/validation/length";
import { validateEmail } from "../../../shared/utils/validation/email";
import { NewUser } from "../models/Newuser";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useAppSelector } from "../../../hooks/redux/hooks";
import { register, reset } from "../authSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

const RegistrationForm: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    value: name,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameClearHandler,
  } = useInput(validateNameLength);

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

  const {
    value: confirmPassword,
    hasError: confirmHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: confirmPasswordClearHandler,
  } = useInput(validatePasswordLength);

  const clearForm = () => {
    nameClearHandler();
    emailClearHandler();
    passwordClearHandler();
    confirmPasswordClearHandler();
    setIsSubmitted(false); // reset form submission status
  };

  // dispatch will be used to dispatch actions to the store
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const { isLoading, isSuccess } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset()); // reset the auth state
      clearForm(); // clear the form
      navigate("/signin"); // redirect to login page
    }
  }, [isSuccess, dispatch]);

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    if (nameHasError || emailHasError || passwordHasError || confirmHasError) {
      setIsSubmitted(true); // set form submission status to true
      return;
    }

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all the fields");
      return;
    }

    console.log("submitting");

    const newUser: NewUser = {
      name,
      email,
      password,
    };

    console.log(JSON.stringify(newUser) + " is registered");

    dispatch(register(newUser));
  };

  if (isLoading)
    return (
      <CircularProgress
        sx={{
          marginTop: "64px",
        }}
        color="primary"
      />
    );

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
            error={nameHasError && isSubmitted} // conditionally render error state
            helperText={
              nameHasError && isSubmitted ? "Enter your name" : null // conditionally render helper text
            }
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
            id="email"
            label="Password"
            variant="outlined"
            placeholder="At least 8 characters"
          />
          <TextField
            value={confirmPassword}
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
            error={confirmHasError && isSubmitted} // conditionally render error state
            helperText={
              confirmHasError && isSubmitted ? "Enter a valid password" : null // conditionally render helper text
            }
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
