"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Box, Button, Card, CardContent, ThemeProvider } from "@mui/material";
import Navigation from "../../Component/Navigation";
import LightTheme from "../theme";
import Footer from "../../Component/Footer";

export default function Privacy() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-lg pt-36 ">
            <Card variant="outlined">
              <CardContent>
                <h1 className="text-xl font-bold pb-10">Aug 15, 2023</h1>
                <h1 className="text-xl font-bold pb-10">Privacy Policy</h1>
                <p>
                  At <strong>Behind The Screen</strong>, we are committed to
                  protecting your privacy and ensuring the security of your
                  personal information. This Privacy Statement outlines how we
                  collect, use, disclose, and safeguard your data when you use
                  our web application. By accessing and using our web app, you
                  consent to the practices described in this Privacy Statement.
                </p>
                <h1 className="text-lg font-bold pt-10">
                  Information We Collect:
                </h1>
                <p>
                  We may collect the following types of information when you use
                  our web app:
                  <ul>
                    <li>
                      <strong>1. Personal Information:</strong> We may collect
                      personally identifiable information, such as your name,
                      email address, and other contact details, which you
                      voluntarily provide when registering or using certain
                      features of the web app.
                    </li>
                    <li>
                      <strong>2. Usage Information:</strong> We may collect
                      non-personal information about how you use the web app,
                      including your interactions, preferences, and activities.
                      This information helps us enhance the user experience and
                      improve our services.
                    </li>
                  </ul>
                </p>
                <h1 className="text-lg font-bold pt-10">
                  How We Use Your Information:
                </h1>
                <p>
                  <ul>
                    <li>
                      <strong>1. Provide and Improve Services:</strong> We use
                      the information you provide to deliver the services you
                      requested, improve our web app's functionality, and
                      develop new features.
                    </li>
                    <li>
                      <strong>2. Communication:</strong> We may use your email
                      address to send you important updates, notifications, and
                      newsletters related to the web app. You can opt-out of
                      these communications at any time.
                    </li>
                    <li>
                      <strong>3. Analyze Usage:</strong> We may analyze user
                      behavior and engagement to understand how our web app is
                      used and make informed decisions for enhancements.
                    </li>
                  </ul>
                </p>
                <h1 className="text-lg font-bold pt-10">
                  Sharing Your Information:
                </h1>
                <p>
                  We do not sell, trade, or rent your personal information to
                  third parties. However, we may share your information in the
                  following circumstances:{" "}
                </p>
                <p>
                  <ul>
                    <li>
                      <strong>1. Service Providers:</strong> We may engage
                      third-party service providers who assist us in operating
                      the web app and provide services on our behalf. These
                      providers are bound by confidentiality agreements and are
                      only authorized to use your information for specified
                      purposes.
                    </li>
                    <li>
                      <strong>2. Legal Compliance:</strong> We may disclose your
                      information if required by law, government request, or to
                      protect our legal rights.
                    </li>
                  </ul>
                </p>
                <h1 className="text-lg font-bold pt-10">Data Security:</h1>
                <p>
                  We have implemented technical and organizational measures to
                  safeguard your personal information from unauthorized access,
                  loss, misuse, or alteration. However, no data transmission
                  over the internet is entirely secure, so we cannot guarantee
                  the absolute security of your information.
                </p>
                <h1 className="text-lg font-bold pt-10">Your Choices:</h1>
                <p>
                  <ul>
                    <li>
                      <strong>1. Access and Update:</strong> You can access,
                      update, or delete your personal information by logging
                      into your account or contacting us. We will respond to
                      your request within a reasonable time.
                    </li>

                    <li>
                      <strong>2. Opt-Out:</strong> You can opt-out of receiving
                      marketing communications by following the instructions in
                      the communication or by contacting us directly.
                    </li>
                  </ul>
                </p>
                <h1 className="text-lg font-bold pt-10">Your Choices:</h1>
                <p>
                  Children's Privacy: Our web app is not intended for
                  individuals under the age of 16. We do not knowingly collect
                  personal information from children under this age. If you
                  believe we have collected information from a child, please
                  contact us to have it removed.
                </p>
                <h1 className="text-lg font-bold pt-10">
                  Changes to This Privacy Statement:
                </h1>
                <p>
                  We may update this Privacy Statement from time to time to
                  reflect changes in our practices or for legal or regulatory
                  reasons. Any updates will be posted on this page with the
                  revised effective date. If you have any questions, concerns,
                  or requests regarding your privacy or this Privacy Statement,
                  please contact us at beanca.torrefranca@benilde.edu.ph. Thank
                  you for using Behind The Screen!
                </p>
                <h1 className="text-lg font-bold pt-10">Contact Us:</h1>
                <p>
                  If you have any questions about this Policy, please contact us
                  at:
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
