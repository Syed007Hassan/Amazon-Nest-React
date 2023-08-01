import React, { ReactNode } from "react";

import { Grid } from "@mui/material";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      sx={{
        p: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      container
      direction="column"
      justifyContent="flex-start"
      alignContent={"center"}
    >
      <img src="amazon-logo.png" alt="amazon-logo" height="px" width="100px" />
      <main>{children}</main>
    </Grid>
  );
};

export default AuthLayout;
