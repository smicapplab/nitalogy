"use client";

import { Fragment, useEffect, useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  ThemeProvider,
} from "@mui/material";
import Navigation from "../../Component/Navigation";
import LightTheme from "../theme";
import Footer from "../../Component/Footer";
import FilmsCard from "./FilmsCard";
import { films } from "@/data/data";

export default function Resources() {
  const ref = useRef(null);

  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-lg pt-36 ">
            <h1>Documentaries and Films</h1>
            <p>Some documentaries and films that, according to the public, have been criticized for being Poverty Porn due to some scenes. These include the sensationalization of poverty, its struggles, and sometimes romanticizing some scenes. </p>

            <Grid container spacing={2}>
              {films.map((film) => (
                <Grid item xs={12} md={6} key={film.title}>
                  <FilmsCard film={film} />
                </Grid>
              ))}
            </Grid>
            <br />
            <br />
            <br />

            <Card variant="outlined">
              <CardContent>
                <h1>Other News Articles</h1>
                <Divider />
                <h1>Poverty porn</h1>
                <p>By Brillante Ma Mendoza</p>
                <p>
                  Being a Filipino is something I’m proud of. That a great
                  percentage of our people remains poor—no. For poverty is
                  neither romantic nor exotic; it is a cruel thing, and this
                  pandemic accentuates the disparity between the members of
                  society—the affluent and powerful, the middle class, and those
                  who struggle to get by each day.{" "}
                </p>
                <a href="https://entertainment.inquirer.net/409307/poverty-porn">
                  Read More
                </a>
                <Divider />

                <h1 className="pt-11">Poverty Porn: the Unethical Way to 'Save' the Poor</h1>
                <p>By Poko Lim</p>
                <p>
                  Emaciated children with flies buzzing around reach their hands
                  out to you, their bodies covered with filth and their
                  surroundings almost inhospitable, their protruding rib cages
                  looking like they would burst out their bodies any second.
                  Have you ever seen disturbing images like these? This is, in
                  fact, a common advertising strategy used by charity
                  organizations - poverty porn.
                </p>
                <a href="https://issuu.com/issiahk/docs/issia_magazine_4th_edition_/s/20943539">
                  Read More
                </a>
                <Divider />
                <h1 className="pt-11">
                  Poverty porn? Donnalyn Bartolome's 'kanto-style' birthday
                  party draws mixed reactions
                </h1>
                <p>By Kathleen A. Llemit</p>
                <p>
                  MANILA, Philippines — Less than a month after her baby-themed
                  birthday photo shoot, social media personality Donnalyn
                  Bartolome is the talk of the town anew when she uploaded on
                  her YouTube channel her "kanto-style" birthday celebration on
                  August 11.
                </p>
                <a href="https://www.philstar.com/entertainment/2022/08/16/2203046/poverty-porn-donnalyn-bartolomes-kanto-style-birthday-party-draws-mixed-reactions">
                  Read More
                </a>
                <Divider />
                <h1 className="pt-11">
                  Darna' director Benedict Mique Jr. tells young filmmakers:
                  Stop poverty porn in PH flicks
                </h1>
                <p>By Robert Requintina</p>
                <p>
                  Benedict Mique Jr., seasoned movie-television screenwriter and
                  director of the popular series "Mars Ravelo's Darna," has
                  encouraged young filmmakers to stop poverty porn in local
                  movies and sell the beauty of the Philippines to the
                  international market.
                </p>
                <a href="https://mb.com.ph/2022/11/28/darna-director-benedict-mique-jr-tells-young-filmmakers-stop-poverty-porn-in-ph-flicks/">
                  Read More
                </a>
                <Divider />
                <h1 className="pt-11">
                  If You're Outraged By This Photo More Than Poverty Itself,
                  Then We've Got a Problem
                </h1>
                <p>By ESQUIRE PHILIPPINES</p>
                <p>
                  It’s easier to cancel a person than the issue itself. And the
                  issue is far more complicated than it seems.
                </p>
                <p>What is art if not to disturb the comfortable?</p>
                <a href="https://www.esquiremag.ph/politics/opinion/the-purpose-of-art-a00203-20210304">
                  Read More
                </a>
                <Divider />
              </CardContent>
            </Card>
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
