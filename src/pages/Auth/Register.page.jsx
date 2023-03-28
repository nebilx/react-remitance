import { Link as RouterLink } from "react-router-dom";
import { Grid, Stack, Typography } from "@mui/material";
import AuthRegister from "./auth-Form/AuthRegister";
import AuthWrapper from "./AuthWrapper";

function Register() {
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
            <Typography variant="h3"> Register</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthRegister />
        </Grid>
        <Grid item xs={12}>
          <Typography
            component={RouterLink}
            to="/"
            variant="body1"
            sx={{ textDecoration: "none" }}
            color="blue"
          >
            Already have an account?
          </Typography>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}

export default Register;
