import { Typography, AppBar, Toolbar, Button, Box } from "@mui/material";
import Image from "mui-image";

export default function Header({ showForm, setShowForm }) {
  return (
    <>
      <AppBar
        position="sticky"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <Image src="logo.png" width={40} height={40} />
            <Typography
              variant="h5"
              sx={{
                display: { xs: "none", voteSm: "flex" },
                marginLeft: { xs: 1, sm: 3 },
              }}
            >
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
