import React from "react";
import { Paper, Typography } from "@mui/material";

export default function NoFacts() {
  return (
    <Paper
      variant="outlined"
      sx={{
        minHeight: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">
        There are no facts in this category. Feel free to add some.
      </Typography>
    </Paper>
  );
}
