"use client";

import { Fragment, lazy } from "react";
import { Box, Card, CardContent, ThemeProvider } from "@mui/material";
import LightTheme from "../theme";
const Footer = lazy(() => import("../../Component/Footer"));
const Navigation = lazy(() => import("../../Component/Navigation"));

export default function Privacy() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-lg pt-36 ">
            <Card variant="outlined">
              <CardContent>
                <h1 className="text-xl font-bold">Aug 15, 2023</h1>
                <h1 className="text-xl font-bold">Privacy Policy</h1>
                <p>
                  At <strong>Behind The Screen Magazine</strong>, we are
                  committed to protecting your privacy and ensuring the security
                  of your personal information. This Privacy Statement outlines
                  how we collect, use, disclose, and safeguard your data when
                  you use our web application. By accessing and using our web
                  app, you consent to the practices described in this Privacy
                  Statement.
                </p>
                <h1 className="text-lg font-bold ">Information We Collect:</h1>
                <p>
                  We may collect the following types of information when you use
                  our web app:
                </p>
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
                <h1 className="text-lg font-bold ">
                  How We Use Your Information:
                </h1>
                <ul>
                  <li>
                    <strong>1. Provide and Improve Services:</strong> We use the
                    information you provide to deliver the services you
                    requested, improve our web app's functionality, and develop
                    new features.
                  </li>
                  <li>
                    <strong>2. Communication:</strong> We may use your email
                    address to send you important updates, notifications, and
                    newsletters related to the web app. You can opt-out of these
                    communications at any time.
                  </li>
                  <li>
                    <strong>3. Analyze Usage:</strong> We may analyze user
                    behavior and engagement to understand how our web app is
                    used and make informed decisions for enhancements.
                  </li>
                </ul>
                <h1 className="text-lg font-bold ">
                  Sharing Your Information:
                </h1>
                <p>
                  We do not sell, trade, or rent your personal information to
                  third parties. However, we may share your information in the
                  following circumstances:{" "}
                </p>
                <ul>
                  <li>
                    <strong>1. Service Providers:</strong> We may engage
                    third-party service providers who assist us in operating the
                    web app and provide services on our behalf. These providers
                    are bound by confidentiality agreements and are only
                    authorized to use your information for specified purposes.
                  </li>
                  <li>
                    <strong>2. Legal Compliance:</strong> We may disclose your
                    information if required by law, government request, or to
                    protect our legal rights.
                  </li>
                </ul>
                <h1 className="text-lg font-bold ">Data Security:</h1>
                <p>
                  We have implemented technical and organizational measures to
                  safeguard your personal information from unauthorized access,
                  loss, misuse, or alteration. However, no data transmission
                  over the internet is entirely secure, so we cannot guarantee
                  the absolute security of your information.
                </p>
                <h1 className="text-lg font-bold ">Your Choices:</h1>
                <ul>
                  <li>
                    <strong>1. Access and Update:</strong> You can access,
                    update, or delete your personal information by logging into
                    your account or contacting us. We will respond to your
                    request within a reasonable time.
                  </li>

                  <li>
                    <strong>2. Opt-Out:</strong> You can opt-out of receiving
                    marketing communications by following the instructions in
                    the communication or by contacting us directly.
                  </li>
                </ul>
                <h1 className="text-lg font-bold ">Your Choices:</h1>
                <p>
                  Children's Privacy: Our web app is not intended for
                  individuals under the age of 16. We do not knowingly collect
                  personal information from children under this age. If you
                  believe we have collected information from a child, please
                  contact us to have it removed.
                </p>
                <h1 className="text-lg font-bold ">
                  Changes to This Privacy Statement:
                </h1>
                <p>
                  We may update this Privacy Statement from time to time to
                  reflect changes in our practices or for legal or regulatory
                  reasons. Any updates will be posted on this page with the
                  revised effective date. If you have any questions, concerns,
                  or requests regarding your privacy or this Privacy Statement,
                  please contact us at beanca.torrefranca@benilde.edu.ph. Thank
                  you for using Behind The Screen Magazine!
                </p>
                <h1 className="text-lg font-bold ">Contact Us:</h1>
                <p>
                  If you have any questions about this Policy, please contact us
                  at:
                </p>

                <p className="">
                  <strong>Beanca Torrefranca</strong>
                  <br />
                  Creator
                  <br />
                  Behind The Screen Magazine
                  <br />
                  beanca.torrefranca@benilde.edu.ph
                </p>
              </CardContent>
            </Card>
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
