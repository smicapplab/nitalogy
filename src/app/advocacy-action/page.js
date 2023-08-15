"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  ThemeProvider,
} from "@mui/material";
import Navigation from "../Component/Navigation";
import LightTheme from "../theme";
import Footer from "../Component/Footer";
import ImgMediaCard from "./EventCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
    <ThemeProvider
      theme={LightTheme}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <Fragment>
        <Navigation />
        {userEvents && (
          <Box display="flex" justifyContent="center" alignContent="center">
            <div className="container max-w-screen-xl pt-36 pl-5 pr-5">
              <h2 className="font-bold text-lg">Upcoming Events</h2>
              <div className="container flex flex-row w-full pl-5 pr-5 ">
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
            </div>
          </Box>
        )}

        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
