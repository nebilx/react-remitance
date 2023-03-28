import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
//material-ui
import {
  Button,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";

function AuthLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email")
            .max(100)
            .required("Email is required"),
          password: Yup.string().max(100).required("Password is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            setStatus({ success: false });
            setSubmitting(false);
          } catch (error) {
            setStatus({ success: false });
            setErrors({ submit: error.message });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={() => {}}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-login">Email Address</InputLabel>
                  <OutlinedInput
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="helper-text-email-login">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-login"> Password</InputLabel>
                  <OutlinedInput
                    id="password-login"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? (
                            <VisibilityOutlined />
                          ) : (
                            <VisibilityOffOutlined />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Enter password"
                    fullWidth
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="helper-text-password-login">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack
                  direction="row"
                  justifyItems="end"
                  alignItems="center"
                  spacing={2}
                >
                  <Link variant="h6" component={RouterLink} to="">
                    Forgot Password?
                  </Link>
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
}

export default AuthLogin;
