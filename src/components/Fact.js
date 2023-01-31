import React, { useState } from "react";
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
import supabase from "../supabase";

export default function Fact({ fact, setFacts }) {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleVote = async (columnName) => {
    setIsUpdating(true);
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ [columnName]: fact[columnName] + 1 })
      .eq("id", fact.id)
      .select();

    setIsUpdating(false);

    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
      );
  };
  return (
    <Paper sx={{ marginBottom: 1 }} variant="outlined">
      <ListItem
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: { xs: "flex-end", lg: "none" },
          justifyContent: { xs: "", lg: "space-between" },
        }}
      >
        <Box>
          <ListItemText primary={fact.text} />
          <Link href={fact.source} target="_blank">
            (Source)
          </Link>
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
            <Button
              disabled={isUpdating}
              onClick={() => handleVote("votesInteresting")}
            >
              {fact.votesInteresting}
              <ThumbUp />
            </Button>
            <Button
              disabled={isUpdating}
              onClick={() => handleVote("votesMindblowing")}
            >
              {fact.votesMindblowing}
              <Face5 />
            </Button>
            <Button
              disabled={isUpdating}
              onClick={() => handleVote("votesFalse")}
            >
              {fact.votesFalse}
              <FlagSharp />
            </Button>
          </Box>
        </Box>
      </ListItem>
    </Paper>
  );
}
