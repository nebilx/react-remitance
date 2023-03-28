import { Link as RouterLink } from "react-router-dom";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AuthWrapper from "./AuthWrapper";
import AuthLogin from "./auth-Form/AuthLogin";

function Login() {
  {
    console.log("login");
  }
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography variant="h3">Login</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin />
        </Grid>
        <Grid item xs={12}>
          <Typography
            component={RouterLink}
            to="/signUp"
            variant="body1"
            sx={{ textDecoration: "none" }}
            color="blue"
          >
            Don&apos;t have an account?
          </Typography>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}

export default Login;
