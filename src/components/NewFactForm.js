import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  Paper,
} from "@mui/material";
import supabase from "../supabase";

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

export default function NewFactForm({ setFacts, onNewFormToggle }) {
  const [fact, setFact] = useState({
    text: "",
    source: "",
    category: "",
  });

  const handleFactChanged = (event) => {
    const { name, value } = event.target;
    setFact({
      ...fact,
      [name]: value,
    });
  };

  const [isUploading, setIsUploading] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      fact.text &&
      isValidUrl(fact.source) &&
      fact.category &&
      fact.text.length <= 200
    ) {
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([
          {
            text: fact.text,
            source: fact.source,
            category: fact.category,
          },
        ])
        .select();

      setIsUploading(false);

      //needs better error handling
      if (!error) setFacts((facts) => [newFact[0], ...facts]);
      else alert("Ups! Error happened while uploading Your fact.");

      setFact((prevFact) => ({
        ...prevFact,
        text: "",
        category: "",
      }));

      onNewFormToggle(false);
    }
  };

  return (
    <>
      <Box>
        <form onSubmit={handleSubmit}>
          <Paper sx={{ padding: 2, marginBottom: 5 }} variant="outlined">
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
                disabled={isUploading}
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
                disabled={isUploading}
              />
              <Select
                id="category"
                name="category"
                value={fact.category}
                displayEmpty
                disabled={isUploading}
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
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isUploading}
              >
                Submit
              </Button>
            </FormControl>
          </Paper>
        </form>
      </Box>
    </>
  );
}
