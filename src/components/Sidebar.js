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
  "Technology",
  "Science",
  "Finance",
  "Society",
  "Entertainment",
  "Health",
  "History",
  "News",
];

export default function FactCategories() {
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
            <ListItem key="All" disablePadding>
              <ListItemButton>
                <ListItemText primary="All Categories" />
              </ListItemButton>
            </ListItem>
          </Paper>
          <List>
            <Paper elevation={3}>
              {categories.map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
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
