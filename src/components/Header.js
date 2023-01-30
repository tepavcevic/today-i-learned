import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Button,
  Box,
} from "@mui/material";
import Image from "mui-image";

export default function Header({ showForm, setShowForm }) {
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <Image src="logo.png" width={40} height={40} />
            <Typography variant="h6" marginLeft={3}>
              Today I Learned
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setShowForm((show) => !show)}
          >
            {!showForm ? "Share a fact" : "Close"}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
