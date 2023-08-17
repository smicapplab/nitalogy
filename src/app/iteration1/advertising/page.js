"use client";

import { Fragment } from "react";
import { Box, Card, CardContent, ThemeProvider } from "@mui/material";
import Navigation from "../../Component/Navigation";
import LightTheme from "../theme";
import Footer from "../../Component/Footer";

export default function Advertising() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-lg pt-36 ">
            <Card variant="outlined">
              <CardContent>
                <h1 className="text-xl font-bold pb-10">Aug 15, 2023</h1>
                <h1 className="text-xl font-bold pb-10"> Advertising Policy</h1>
                <p>
                  At <strong>Behind The Screen Magazine</strong>, we are
                  committed to maintaining the integrity of our content and
                  providing our readers with a meaningful experience. Behind The
                  Screen Magazine makes money through advertisements and
                  subscriptions. It is an overall non-profit magazine that
                  wishes to raise awareness.
                </p>
                <h1 className="text-lg font-bold pt-10">
                  Transparency and Disclosure
                </h1>
                <p>
                  Transparency is a cornerstone of our approach. All
                  advertisements will be clearly identified, ensuring readers
                  can easily distinguish between editorial and advertising
                  content. We believe in empowering our readers with accurate
                  information to make informed decisions.
                </p>
                <h1 className="text-lg font-bold pt-10">
                  Alignment with Editorial Content
                </h1>
                <p>
                  Advertisements must align with the values and themes of
                  "Behind The Screen Magazine." They must not conflict with or
                  undermine our editorial content, instead contributing
                  positively to the discussions we cultivate.
                </p>
                <h1 className="text-lg font-bold pt-10">
                  Avoidance of Exploitative Content
                </h1>
                <p>
                  We will not entertain advertisements that exploit or
                  sensationalize sensitive issues such as poverty, social
                  injustices, or human suffering. Advertisements must respect
                  the dignity and welfare of all individuals and communities.
                </p>
                <h1 className="text-lg font-bold pt-10">Ad Placement and Integration</h1>
                <p>Ad placements will maintain a clear separation from editorial content to eliminate confusion. Integration will be executed in a manner that preserves a seamless and respectful reader experience.</p>
                <h1 className="text-lg font-bold pt-10">User Feedback and Accountability</h1>
                <p>We highly value reader feedback. If any advertisement raises concerns about policy alignment, readers are encouraged to reach out. We take full responsibility for advertisements featured on our platform. If there are any problems with any advertisements, do email us at (email) to address any concerns.</p>
              </CardContent>
            </Card>
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
