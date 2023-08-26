"use client";

import { Fragment, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  ThemeProvider,
} from "@mui/material";
import Navigation from "../../Component/Navigation";
import LightTheme from "../theme";
import Footer from "../../Component/Footer";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { format } from "date-fns";

export default function Group() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const [group, setGroup] = useState(null);
  const [localUser, setLocalUser] = useState(null);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  useEffect(() => {
    const localUser = localStorage.getItem("localUser");
    setLocalUser(JSON.parse(localUser));

    const fetchdata = async () => {
      const { data } = await axios.post("/api/get-group", { title });
      setGroup(data.group);
    };

    fetchdata();
  }, []);

  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-md pt-36 ">
            {group && (
              <Card elevation={0}>
                <CardMedia component="img" image={group?.image} />
                <CardContent>
                  <h1 className="text-lg">{group.name}</h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: group.description }}
                    className="pb-10"
                  />
                  <p>
                    <span className="font-bold">Date Created: </span>
                    {format(new Date(group.sk), "MM dd, yyyy")}
                  </p>
                  <p>
                    <span className="font-bold">Owner: </span>
                    {group.author}
                  </p>
                  <p>
                    <span className="font-bold">Website: </span>
                    <Button sx={{ textTransform: "none" }} onClick={()=> openInNewTab(group.url)}>{group.url}</Button>
                  </p>
                  <Divider />
                  <div className="pt-10" />
                  <h2 className="font-bold">Members</h2>
                  <ul>
                    {group.members.map((member) => (
                      <li>{member.name}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
