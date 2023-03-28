import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import {
  Button,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

function AuthRegister() {
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
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: "",
          image: "",
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().max(100).required("First Name is required"),
          lastName: Yup.string().max(100).required("Last Name is required"),
          email: Yup.string()
            .email("Must be valid email")
            .max(100)
            .required("Email is required"),
          phoneNumber: Yup.number()
            .max(10)
            .required("Phone Number is required"),
          password: Yup.string().max(100).required("Password is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            setStatus({ success: false });
            setSubmitting(false);
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
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
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="firstName-register">
                    First Name *
                  </InputLabel>
                  <OutlinedInput
                    id="firstName-register"
                    type="text"
                    value={values.firstName}
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    fullWidth
                    error={Boolean(touched.firstName && errors.firstName)}
                  />
                  {touched.firstName && errors.firstName && (
                    <FormHelperText error id="helper-text-firstName-register">
                      {errors.firstName}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="lastName-register">
                    Last Name *
                  </InputLabel>
                  <OutlinedInput
                    id="lastName-register"
                    type="text"
                    value={values.lastName}
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    fullWidth
                    error={Boolean(touched.lastName && errors.lastName)}
                  />
                  {touched.lastName && errors.lastName && (
                    <FormHelperText error id="helper-text-lastName-register">
                      {errors.lastName}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-register">
                    Email Address *
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-register"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="xyz@gmail.com"
                    inputProps={{}}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="helper-text-email-register">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="phone-register">
                    Phone Number *
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                    id="phone-register"
                    type="tel"
                    value={values.phoneNumber}
                    name="phone number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="mobile number"
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <FormHelperText error id="helper-text-phone-register">
                      {errors.phoneNumber}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-signup">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="password-signup"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
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
                    placeholder="******"
                    inputProps={{}}
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="helper-text-password-signup">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body2">
                  By Signing up, you agree to our &nbsp;
                  <Link variant="subtitle2" component={RouterLink} to="#">
                    Terms of Service
                  </Link>
                  &nbsp; and &nbsp;
                  <Link variant="subtitle2" component={RouterLink} to="#">
                    Privacy Policy
                  </Link>
                </Typography>
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
                  Create Account
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
}

export default AuthRegister;
