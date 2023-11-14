"use client";

import { Fragment, lazy, useEffect, useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  ThemeProvider,
} from "@mui/material";
import LightTheme from "../theme";
import { films } from "@/data/data";
import { Saira_Extra_Condensed } from "next/font/google";

const saira = Saira_Extra_Condensed({ subsets: ["latin"], weight: "600" });
const Footer = lazy(() => import("../../Component/Footer"));
const Navigation = lazy(() => import("../../Component/Navigation"));
const FilmsCard = lazy(() => import("./FilmsCard"));

export default function Resources() {
  const ref = useRef(null);

  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-lg pt-36 p-2">
            <div className="px-4 py-0 w-full text-4xl md:text-8xl font-bold text-black">
              <span className={saira.className}>DOCUMENTARIES AND FILMS</span>
            </div>
            <p>
              Some documentaries and films that, according to the public, have
              been criticized for being Poverty Porn due to some scenes. These
              include the sensationalization of poverty, its struggles, and
              sometimes romanticizing some scenes.{" "}
            </p>

            <Grid container spacing={1}>
              {films.map((film) => (
                <Grid item xs={12} md={4} key={film.title}>
                  <FilmsCard film={film} />
                </Grid>
              ))}
            </Grid>
            <br />
            {/* <br />
            <br />

            <Card variant="outlined">
              <CardContent>
                <span className={`${saira.className} text-4xl md:text-8xl `}>
                  OTHER NEWS ARTICLES
                </span>
                <Divider />
                <span className={`${saira.className} text-2xl`}>Poverty porn</span>
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
                <br />
                <br />
                <Divider />
                <br />
                <span className={`${saira.className} text-2xl`}>
                  Poverty Porn: the Unethical Way to 'Save' the Poor
                </span>
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
                <br />
                <br />
                <Divider />
                <br />
                <span className={`${saira.className} text-2xl`}>
                  Poverty porn? Donnalyn Bartolome's 'kanto-style' birthday
                  party draws mixed reactions
                </span>
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
                <br />
                <br />
                <Divider />
                <br />
                <span className={`${saira.className} text-2xl`}>
                  Darna' director Benedict Mique Jr. tells young filmmakers:
                  Stop poverty porn in PH flicks
                </span>
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
                <br />
                <br />
                <Divider />
                <br />
                <span className={`${saira.className} text-2xl`}>
                  If You're Outraged By This Photo More Than Poverty Itself,
                  Then We've Got a Problem
                </span>
                <p>By ESQUIRE PHILIPPINES</p>
                <p>
                  It’s easier to cancel a person than the issue itself. And the
                  issue is far more complicated than it seems.
                </p>
                <p>What is art if not to disturb the comfortable?</p>
                <a href="https://www.esquiremag.ph/politics/opinion/the-purpose-of-art-a00203-20210304">
                  Read More
                </a>
                <br />
                <br />
                <Divider />
                <br />
              </CardContent>
            </Card> */}
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
