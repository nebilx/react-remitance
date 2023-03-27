import { Box, Grid, Card } from "@mui/material";

// Logo

// footer

// background

const AuthWrapper = ({ children }) => (
  <Box sx={{ minHeight: "100vh" }}>
    {/* background image */}
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
        {/* logo */}
      </Grid>

      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: { xs: "calc(100vh - 134px)", md: "calc(100vh - 112px)" },
          }}
        >
          <Grid item>
            <Card>{children}</Card>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          {/* footer */}
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

export default AuthWrapper;
