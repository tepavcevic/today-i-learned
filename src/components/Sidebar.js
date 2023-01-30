import * as React from "react";
import {
  Paper,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const drawerWidth = 240;
const categories = [
  "technology",
  "science",
  "finance",
  "society",
  "entertainment",
  "health",
  "history",
  "news",
];

export default function FactCategories({ setCurrentCategory }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          maxWidth: drawerWidth,
        }}
      >
        <Box sx={{ overflow: "auto", margin: 0 }}>
          <Paper variant="outlined">
            <ListItem key="all" disablePadding>
              <ListItemButton onClick={() => setCurrentCategory("all")}>
                <ListItemText primary="ALL" />
              </ListItemButton>
            </ListItem>
          </Paper>
          <List>
            <Paper elevation={3}>
              {categories.map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    key={text}
                    onClick={() => setCurrentCategory(text)}
                  >
                    <ListItemText primary={text.toUpperCase()} />
                  </ListItemButton>
                </ListItem>
              ))}
            </Paper>
          </List>
        </Box>
      </Box>
    </>
  );
}
