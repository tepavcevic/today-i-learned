import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import supabase from "../supabase";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import FactList from "./FactList";
import NewFactForm from "./NewFactForm";

export default function App() {
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [isCategoryEmpty, setIsCategoryEmpty] = useState(false);
  const handleNewFormToggle = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  useEffect(
    function () {
      async function getFacts() {
        setIsLoading(true);

        let query = supabase.from("facts").select("*");

        if (currentCategory !== "all")
          query = query.eq("category", currentCategory);

        const { data: facts, error } = await query
          .order("votesInteresting", { ascending: false })
          .limit(1000);
        // might implement pagination at later point in time

        //need to add better error handling
        if (!error) setFacts(facts);
        else alert("Error! Data not available, please try again.");
        setIsLoading(false);
      }
      getFacts();
    },
    [currentCategory]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header showForm={showForm} setShowForm={setShowForm} />

        <Box
          sx={{
            marginLeft: { xs: "160px", md: "190px", lg: "220px" },
            padding: { xs: 1, sm: 2, md: 3, lg: 5 },
          }}
        >
          {showForm && (
            <NewFactForm
              setFacts={setFacts}
              onNewFormToggle={handleNewFormToggle}
            />
          )}
          <Sidebar setCurrentCategory={setCurrentCategory} />
          {isLoading ? (
            <Loading />
          ) : (
            <FactList setFacts={setFacts} facts={facts} />
          )}
        </Box>
      </ThemeProvider>
    </>
  );
}
