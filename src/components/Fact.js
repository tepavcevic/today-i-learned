import React from "react";
import {
  Paper,
  ListItem,
  ListItemText,
  Button,
  Chip,
  Link,
  Box,
} from "@mui/material";
import { ThumbUp, Face5, FlagSharp } from "@mui/icons-material";

export default function Fact({ fact }) {
  return (
    <Paper sx={{ marginBottom: 1 }} variant="outlined">
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <ListItemText primary={fact.text} />
          <Link href={fact.source}>(Source)</Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <Chip label={fact.category} size="small" />
          <Box display="flex">
            <Button>
              {fact.votesInteresting}
              <ThumbUp />
            </Button>
            <Button>
              {fact.votesMindblowing}
              <Face5 />
            </Button>
            <Button>
              {fact.votesFalse}
              <FlagSharp />
            </Button>
          </Box>
        </Box>
      </ListItem>
    </Paper>
  );
}
