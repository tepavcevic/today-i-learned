import * as React from "react";
import {
  Drawer,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const drawerWidth = 220;

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
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: { xs: "160px", md: "190px", lg: drawerWidth },
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: { xs: "160px", md: "190px", lg: drawerWidth },
            boxSizing: "border-box",
            borderWidth: 0,
          },
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            marginTop: { xs: "64px", sm: "80px", md: "88px", lg: "104px" },
            marginLeft: 1,
          }}
        >
          <ListItem key="all" disablePadding>
            <ListItemButton onClick={() => setCurrentCategory("all")}>
              <ListItemText primary="ALL" />
            </ListItemButton>
          </ListItem>
        </Paper>
        <List>
          <Paper variant="outlined" sx={{ marginLeft: 1 }}>
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
      </Drawer>
    </>
  );
}
