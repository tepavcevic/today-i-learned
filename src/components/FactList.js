import { Box, List } from "@mui/material";
import Fact from "./Fact";
import NoFacts from "./NoFacts";

export default function FactList({ facts, setFacts }) {
  if (facts.length === 0) return <NoFacts />;
  return (
    <>
      <Box>
        <List sx={{ paddingTop: 0, marginLeft: 1 }}>
          {facts.map((fact) => (
            <Fact key={fact.id} fact={fact} setFacts={setFacts} />
          ))}
        </List>
      </Box>
    </>
  );
}
