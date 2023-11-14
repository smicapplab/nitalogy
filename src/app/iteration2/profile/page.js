"use client";

import { Fragment, lazy, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  ThemeProvider,
} from "@mui/material";
import LightTheme from "../theme";
import axios from "axios";
import GroupCard from "../groups/GroupCard";
const Footer = lazy(() => import("../../ComponentTwo/Footer"));
const NavigationTwo = lazy(() => import("../../ComponentTwo/NavigationTwo"));

export default function Group() {
  const [localUser, setLocalUser] = useState(null);
  const [myGroups, setMyGroups] = useState([]);
  const [myComments, setMyComments] = useState([]);

  useEffect(() => {
    const localUser = localStorage.getItem("localUser");
    setLocalUser(JSON.parse(localUser));

    const fetchGroup = async () => {
      const { data } = await axios.post("/api/get-groups", {});
      setMyGroups(data.myGroups);
    };

    fetchGroup();
  }, []);

  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <NavigationTwo />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-md pt-36 ">
            <Card elevation={0}>
              <CardContent>
                <h1 className="text-lg pb-5 pt-5">User Profile</h1>
                <Divider />
                {localUser && (
                  <div className="pt-5">
                    <p>
                      <span className="font-bold">Name: </span>
                      {localUser.name}
                    </p>
                    <p>
                      <span className="font-bold">Email: </span>
                      {localUser.email}
                    </p>
                  </div>
                )}
                <Divider />
                <div className="pt-5 pb-5">
                  <h1 className="pb-5 pt-5">My Groups</h1>
                  <Grid container spacing={2}>
                    {myGroups.map((group) => (
                      <Grid item md={6} key={group.name}>
                        <GroupCard
                          elevation={0}
                          group={group}
                          showJoin={false}
                          isMyGroup={true}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
