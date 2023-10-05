"use client";

import { Fragment, lazy, useEffect, useState } from "react";
import { Box, Button, Grid, Tab, Tabs, ThemeProvider } from "@mui/material";
import LightTheme from "../theme";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Saira_Extra_Condensed } from "next/font/google";

const saira = Saira_Extra_Condensed({ subsets: ["latin"], weight: "600" });
const Footer = lazy(() => import("../../Component/Footer"));
const Navigation = lazy(() => import("../../Component/Navigation"));
const GroupCard = lazy(() => import("./GroupCard"));

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default function Groups() {
  const [value, setValue] = useState(0);
  const [localUser, setLocalUser] = useState(null);
  const [myGroups, setMyGroups] = useState([]);
  const [discover, setDiscover] = useState([]);
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const doJoin = async (group) => {
    const { data } = await axios.post("/api/join-group", { group });
    setDiscover(data.discover);
    setMyGroups(data.myGroups);
    setValue(0);
  };

  const doLeave = async (group) => {
    const { data } = await axios.post("/api/leave-group", { group });
    setDiscover(data.discover);
    setMyGroups(data.myGroups);
    setValue(0);
  };

  const createNewGroup = () => {
    if (localUser) {
      router.push("/iteration1/new-group");
    } else {
      router.push("/iteration1/login");
    }
  };

  useEffect(() => {
    const localUser = localStorage.getItem("localUser");
    setLocalUser(JSON.parse(localUser));

    const fetchdata = async () => {
      const { data } = await axios.post("/api/get-groups", {});
      setDiscover(data.discover);
      setMyGroups(data.myGroups);
    };
    fetchdata();
  }, []);

  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-lg pt-36 p-2">
            <div className="flex justify-between pb-10">
              <div className="px-4 py-0 w-full text-4xl md:text-8xl font-bold text-black">
                <span className={saira.className}>GROUPS YOU CAN JOIN</span>
              </div>
              <Button
                variant="contained"
                color="primary"
                startIcon={<Diversity1Icon />}
                sx={{ textTransform: "none", width: "200px !important", height: "50px !important" }}
                onClick={() => createNewGroup()}
              >
                New Group
              </Button>
            </div>

            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  label="My Groups"
                  color="primary"
                  sx={{ textTransform: "none" }}
                />
                <Tab label="Discover Groups" sx={{ textTransform: "none" }} />
              </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
              <Grid container spacing={2}>
                {myGroups.map((group) => (
                  <Grid item md={6} key={group.name}>
                    <GroupCard
                      group={group}
                      doJoin={doJoin}
                      doLeave={doLeave}
                      isMyGroup={true}
                    />
                  </Grid>
                ))}
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Grid container spacing={2}>
                {discover.map((group) => (
                  <Grid item md={6} key={group.name}>
                    <GroupCard
                      group={group}
                      doJoin={doJoin}
                      doLeave={doLeave}
                      isMyGroup={false}
                    />
                  </Grid>
                ))}
              </Grid>
            </CustomTabPanel>
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
