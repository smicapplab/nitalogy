"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Box, Button, Card, CardContent, ThemeProvider } from "@mui/material";
import Navigation from "../../Component/Navigation";
import LightTheme from "../theme";
import Footer from "../../Component/Footer";

export default function Terms() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-lg pt-36 ">
            <Card variant="outlined">
              <CardContent>
                <h1 className="text-xl font-bold pb-10">Aug 15, 2023</h1>
                <p className="pb-5">
                  Welcome to the <strong>Behind The Screen</strong> website.
                </p>
                <p className="pb-5">
                  This page specifies the terms of use of our Site and services{" "}
                  <strong>("Terms of Use")</strong> by you. Read the Terms of
                  Use carefully before you start using our Site and services.
                  Aside from these Terms of Use, all Site features and
                  functions, as well as our services and products must be in
                  compliance with the Master Agreement. We advise you to print
                  these Terms of Use for future reference.
                </p>
                <p className="pb-5">
                  By accessing, browsing, and / or using our Site and services,
                  or by receiving services through the Site, you acknowledge and
                  agree that you have read, understood, accepted, and agreed to
                  be legally bound by these Terms of Use and the documents
                  referred herein, including any additions, changes or
                  modifications therein which may be introduced by us from time
                  to time without prior notice.
                </p>
                <p className="pb-5">
                  You likewise agree that the provisions, disclosures and
                  disclaimers set forth herein are fair and reasonable and that
                  your agreement to follow and be bound by these Terms of Use is
                  voluntary and is not a result of fraud, duress, or undue
                  influence exercised upon you by any person or entity.{" "}
                  <strong>
                    PLEASE READ THESE TERMS CAREFULLY AS THEY CONSTITUTE A LEGAL
                    AGREEMENT BETWEEN YOU AND US.
                  </strong>
                </p>

                <h1 className="text-xl font-bold pb-10">Use of Website:</h1>
                <p>
                  <ul>
                    <li>
                      <strong>1. Content Ownership:</strong> All content on the
                      Website, including text, images, graphics, videos, and
                      other materials, is the property of{" "}
                      <strong>De La Salle-College of Saint Benilde</strong> or
                      its respective content creators. You may not modify,
                      reproduce, distribute, or republish any content without
                      prior written consent.
                    </li>
                    <li>
                      <strong>2. User Content:</strong> You may have the
                      opportunity to submit or post content on the Website as
                      part of your school project. By submitting content, you
                      grant [Your School Name] a non-exclusive, royalty-free,
                      worldwide license to use, modify, reproduce, and display
                      the content for educational and promotional purposes
                      related to the school project.
                    </li>
                  </ul>
                </p>

                <h1 className="text-xl font-bold pb-10">
                  Disclaimer of Liability:
                </h1>
                <p>
                  <li>
                    <strong>1. Accuracy of Information: </strong> The
                    information provided on the Website is for educational and
                    informational purposes only.{" "}
                    <strong>De La Salle-College of Saint Benilde</strong> makes
                    no warranties or representations regarding the accuracy,
                    completeness, or reliability of the content. You use the
                    content at your own risk.
                  </li>
                  <li>
                    <strong>2. Third-Party Links:</strong> The Website may
                    contain links to third-party websites.{" "}
                    <strong>De La Salle-College of Saint Benilde</strong> is not
                    responsible for the content, accuracy, or practices of these
                    external sites. Any links provided do not imply endorsement
                    or association with those websites.
                  </li>
                </p>

                <h1 className="text-xl font-bold pb-10">Privacy:</h1>
                <p>
                  Your use of the Website is also governed by our Privacy
                  Policy, which outlines how we collect, use, and protect your
                  personal information. By using the Website, you consent to the
                  practices described in the Privacy Policy.
                </p>
                <h1 className="text-xl font-bold pb-10">Termination:</h1>
                <p>
                  <strong>De La Salle-College of Saint Benilde</strong> reserves
                  the right to suspend or terminate access to the Website at any
                  time without notice.{" "}
                  <strong>De La Salle-College of Saint Benilde</strong> may also
                  remove or modify any content on the Website for any reason
                  without liability.
                </p>
                <h1 className="text-xl font-bold pb-10">Governing Law:</h1>
                <p>
                  These Terms are governed by and construed in accordance with
                  the laws of the Philippines, without regard to its conflicts
                  of law principles. Any legal action or proceeding arising out
                  of or relating to these Terms shall be exclusively brought in
                  the courts located in Philippines, and you hereby consent to
                  the personal jurisdiction of such courts.
                </p>
                <h1 className="text-xl font-bold pb-10">Changes to Terms:</h1>
                <p>
                  Creators and admins of the site may update these Terms from
                  time to time. Any changes will be posted on this page with the
                  revised effective date. Your continued use of the Website
                  after any changes to the Terms will constitute your acceptance
                  of those changes.
                </p>
                <h1 className="text-xl font-bold pb-10">Contact Us:</h1>
                <p>
                  If you have any questions or concerns regarding these Terms,
                  please contact us at
                </p>
                <p className="pt-10">
                  <strong>Beanca Torrefranca</strong>
                </p>
                <p>Creator</p>
                <p>Behind The Screen</p>
                <p>beanca.torrefranca@benilde.edu.ph</p>
              </CardContent>
            </Card>
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
