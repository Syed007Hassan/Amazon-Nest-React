import { Box, Container, Grid, Typography, TextField } from "@mui/material";
import React from "react";
import { FC, FormEvent } from "react";

const RegistrationForm: FC = () => {
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
      <form>
        <Grid container direction={"column"} justifyContent={"flex-start"}>
          <Typography variant="h5" component={"h4"} color="initial">
            Create an account
          </Typography>

          <TextField
            sx={{
              borderColor: "black",
              fontWeight: 500,
              marginTop: 2,
              marginBottom: 2,
              color: "black",
            }}
            id="name"
            label="Name"
            variant="outlined"
          />
          <TextField
            sx={{
              borderColor: "black",
              fontWeight: 500,
              marginTop: 2,
              marginBottom: 2,
              color: "black",
            }}
            id="email"
            label="Email"
            variant="outlined"
          />
        </Grid>
      </form>
    </Box>
  );
};

export default RegistrationForm;
