import { Box, List, Typography } from "@mui/material";
import Fact from "./Fact";

export default function FactList({ facts, setFacts }) {
  //makeshift solution, needs refactoring
  if (facts.length === 0)
    return (
      <Typography>
        There are no facts for this category.Feel free to add your own!
      </Typography>
    );
  return (
    <>
      <Box sx={{ overflow: "scroll", paddingBottom: 40 }}>
        <List sx={{ paddingTop: 0, marginLeft: 1 }}>
          {facts.map((fact) => (
            <Fact key={fact.id} fact={fact} setFacts={setFacts} />
          ))}
        </List>
      </Box>
    </>
  );
}
