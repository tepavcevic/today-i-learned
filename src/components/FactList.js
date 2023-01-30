import { List } from "@mui/material";
import { Box } from "@mui/system";
import Fact from "./Fact";

export default function FactList({ facts }) {
  return (
    <>
      {console.log(facts)}
      <Box>
        <List sx={{ paddingTop: 0, marginLeft: 1 }}>
          {facts.map((fact) => (
            <Fact key={fact.id} fact={fact} />
          ))}
        </List>
      </Box>
    </>
  );
}
