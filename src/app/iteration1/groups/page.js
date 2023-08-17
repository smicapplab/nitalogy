"use client";

import { Fragment, useEffect } from "react";
import { Box, Grid, ThemeProvider } from "@mui/material";
import Navigation from "../../Component/Navigation";
import LightTheme from "../theme";
import Footer from "../../Component/Footer";
import GroupCard from "./GroupCard";
import { groups } from "@/data/data";

export default function Groups() {
  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-md pt-36 ">
            <h1>Groups</h1>
            <Grid container spacing={2}>
              {groups.map((group) => (
                <Grid item md={12} key={group.name}>
                  <GroupCard group={group} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
