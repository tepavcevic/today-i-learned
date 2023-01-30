import React from "react";
import { CircularProgress, Box } from "@mui/material";

export default function Loading() {
  return (
    <Box
      width="inherit"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
}
