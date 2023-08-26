"use client";

import { Fragment, lazy, useEffect, useRef, useState } from "react";
import { Box, Button, ThemeProvider } from "@mui/material";
import LightTheme from "../theme";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const ImgMediaCard = lazy(() => import("./EventCard"));
const Footer = lazy(() => import("../../Component/Footer"));
const Navigation = lazy(() => import("../../Component/Navigation"));

const e = {
  title: "Event Title",
  description:
    "Event description here! Event description here! Hello Mike Test",
  date: new Date().toISOString(),
  location: "Event Location",
  image:
    "https://blog.vantagecircle.com/content/images/size/w1000/2019/06/company-event.png",
  link: "https://www.google.com",
};

export default function AdvocacyAndAction() {
  const [userEvents, setUserEvents] = useState([e]);
  const [groups, setgroups] = useState([]);
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {
    setUserEvents((prev) => [...prev, e]);
    setUserEvents((prev) => [...prev, e]);
    setUserEvents((prev) => [...prev, e]);
    setUserEvents((prev) => [...prev, e]);
    setUserEvents((prev) => [...prev, e]);
    setUserEvents((prev) => [...prev, e]);
    setUserEvents((prev) => [...prev, e]);
    setUserEvents((prev) => [...prev, e]);
  }, []);

  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        {userEvents && (
          <Box display="flex" justifyContent="center" alignContent="center">
            <div className="container max-w-screen-xl pt-36 ">
              <h2 className="font-bold text-lg">Upcoming Events</h2>
              <div className="container flex flex-row w-full ">
                <ArrowBackIosIcon
                  onClick={() => scroll(-520)}
                  className="relative top-48 left-1 cursor-pointer"
                />
                <div
                  className="container flex flex-row  overflow-auto no-scrollbar scroll-smooth"
                  ref={ref}
                >
                  {userEvents?.map((userEvent) => (
                    <ImgMediaCard userEvent={userEvent} />
                  ))}
                </div>
                <ArrowForwardIosIcon
                  onClick={() => scroll(+520)}
                  className="relative top-48 right-1 cursor-pointer"
                />
              </div>
              <div className="flex flex-grow justify-between pl-5 pr-5">
                <Button>Add New</Button>
                <Button>View More</Button>
              </div>
            </div>
          </Box>
        )}

        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
