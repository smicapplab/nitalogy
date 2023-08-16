"use client";

import { Fragment, lazy } from "react";

import Navigation from "../Component/Navigation";
import Hero from "../Component/Hero";
import EventHome from "../Component/EventHome";
import LightTheme from "./theme";
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
import { articles } from "@/data/data";
import { useRouter } from "next/navigation";
const Footer = lazy(() => import("../Component/Footer"));

export default function Home() {
  const router = useRouter();

  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Hero />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="max-w-screen-lg pt-10 pl-5 pr-5">
            <Card variant="outlined">
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <CardMedia
                      component="img"
                      height="194"
                      image={articles[0].image}
                      alt="Paella dish"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CardHeader
                      title={articles[0].title}
                      subheader={
                        <div className="flex justify-between">
                          <span>{articles[0].author}</span>
                          <span>{articles[0].date}</span>
                        </div>
                      }
                    />
                    <CardContent>
                      <div
                        dangerouslySetInnerHTML={{ __html: articles[0].brief }}
                      />
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={() => router.push("/iteration1/article?index=0")}>
                        Read More
                      </Button>
                    </CardActions>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div
              style={{
                color: "#194175",
                width: "100%",
                minHeight: 200,
                paddingTop: 50,
              }}
            >
              <span className="text-center w-full">
                <h1 className="text-black text-xl font-bold">Events</h1>
              </span>
              <Grid container spacing={2}>
                {[
                  {
                    author: "Beanca T",
                    title: "New Article 1",
                    subheader: "June 2, 2023",
                    content:
                      "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.",
                  },
                  {
                    author: "James M",
                    title: "New Article 2",
                    subheader: "July 2, 2023",
                    content:
                      "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla.",
                  },
                  {
                    author: "Henry S",
                    title: "New Article 3",
                    subheader: "Aug 2, 2023",
                    content:
                      "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede.",
                  },
                ].map((item, i) => (
                  <Grid item xs={12} md={4} key={i}>
                    <EventHome {...item} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
