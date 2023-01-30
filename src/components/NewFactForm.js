import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  Paper,
} from "@mui/material";

const categories = [
  { name: "technology" },
  { name: "science" },
  { name: "finance" },
  { name: "society" },
  { name: "entertainment" },
  { name: "health" },
  { name: "history" },
  { name: "news" },
];

export default function NewFactForm({ setFacts }) {
  const [fact, setFact] = useState({
    text: "",
    source: "https://mui.com",
    category: "",
  });

  const handleFactChanged = (event) => {
    const { name, value } = event.target;
    setFact({
      ...fact,
      [name]: value,
    });
  };

  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      fact.text &&
      isValidUrl(fact.source) &&
      fact.category &&
      fact.text.length <= 200
    ) {
      const newFact = {
        id: Date.now(),
        text: fact.text,
        source: fact.source,
        category: fact.category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      };

      setFacts((facts) => [newFact, ...facts]);

      setFact((prevFact) => ({
        ...prevFact,
        text: "",
        category: "",
      }));
    }
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <Paper sx={{ paddingX: 2 }} variant="outlined">
            <FormControl fullWidth variant="outlined">
              <TextField
                margin="normal"
                value={fact.text}
                onChange={(event) => handleFactChanged(event)}
                required
                id="fact"
                label="Fact"
                name="text"
                autoComplete="off"
                helperText={200 - fact.text.length}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                value={fact.source}
                onChange={(event) => handleFactChanged(event)}
                name="source"
                label="Source"
                type="text"
                id="source"
                helperText="Trustworthy source"
                autoComplete="off"
              />
              <Select
                id="category"
                name="category"
                value={fact.category}
                displayEmpty
                onChange={(event) => handleFactChanged(event)}
              >
                <MenuItem value="" default disabled>
                  Choose Category...
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category.name} value={category.name}>
                    {category.name.toUpperCase()}
                  </MenuItem>
                ))}
              </Select>
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Submit
              </Button>
            </FormControl>
          </Paper>
        </form>
      </Container>
    </>
  );
}
