"use client";

import { Fragment, lazy, useState } from "react";
import { Alert, AlertTitle, Box, Button, ThemeProvider } from "@mui/material";
import LightTheme from "../theme";
import Footer from "../Component/Footer";
import Navigation from "../Component/Navigation";
import InputText from "../Component/InputText";

export default function ContactUs() {
  const [contact, setContact] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const onsubmitForm = (e) => {
    setContact({});
    setIsSubmitted(true);
  };

  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-md pt-36 ">
            <h1 className="text-xl pb-11">Contact Us</h1>
            <p>We'd love to hear from you directly. Kindly fill up the form then click submit</p>
            {isSubmitted && (
              <>
                {" "}
                <Alert severity="success">
                  <AlertTitle>Thank you!</AlertTitle>
                  Your message has been sent. We will get back to you as soon as
                  possible.
                </Alert>
                <br />
              </>
            )}

            <InputText
              value={contact.fullName || ""}
              placeholder="Full Name"
              onChange={onChange}
              name="fullName"
            />
            <InputText
              value={contact.email || ""}
              placeholder="Email Address"
              onChange={onChange}
              name="email"
            />
            <InputText
              value={contact.message || ""}
              rows={5}
              placeholder="Message"
              onChange={onChange}
              name="message"
            />
            <Button
              onClick={onsubmitForm}
              variant="contained"
              color="primary"
              sx={{ backgroundColor: "white" }}
            >
              Submit
            </Button>
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
