"use client";

import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import EmailIcon from "@mui/icons-material/Email";
import InputText from "./InputText";
import { useState } from "react";
import { pages } from "./Navigation";
import { useRouter } from "next/navigation";

export const links = [
  { label: "Privacy", url: "/iteration1/privacy" },
  { label: "Terms & Condition", url: "/iteration1/terms" },
  { label: "Advertising Policy", url: "/iteration1/advertising" },
];

export default function Footer() {
  const theme = useTheme();
  const [email, setEmail] = useState(null);
  const [contact, setContact] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const onSubChanged = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const onsubmitForm = (e) => {
    setContact({});
    setIsSubmitted(true);
  };

  const onsubmitSubForm = (e) => {
    setEmail(null);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      sx={{
        marginTop: 5,
        padding: 5,
        backgroundColor: "#323232",
        color: "#ffffff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={2}>
          <h1>Explore</h1>
          <ul>
            {pages.map((page) => (
              <li
                className="cursor-pointer pt-2 text-gray-400 ml-2"
                onClick={() => router.push(page.url)}
              >
                {page.label}
              </li>
            ))}
          </ul>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <h1>Company</h1>
          <ul>
            {links.map((link) => (
              <li
                className="cursor-pointer pt-2 text-gray-400 ml-2"
                onClick={() => router.push(link.url)}
              >
                {link.label}
              </li>
            ))}
          </ul>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <h2 className="text-xl font-medium">Subscribe</h2>
          <p className="text-sm">
            Stay Informed, Make a Difference: Subscribe to Our Newsletter
          </p>
          <div className="w-max-h-72">
            <FormControl
              fullWidth
              sx={{
                maxWidth: "400px",
                marginBottom: "20px",
                paddingTop: "10px",
              }}
            >
              <TextField
                variant="outlined"
                color="primary"
                placeholder="Enter your email address"
                value={email || ""}
                onChange={(e) => onSubChanged(e)}
                sx={{ color: "#000000", backgroundColor: "#ffffff" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="text"
                        endIcon={<EmailIcon />}
                        onClick={() => onsubmitSubForm()}
                      >
                        Send
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <h2 className="text-xl font-medium">Contact Us</h2>
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
        </Grid>
      </Grid>
    </Box>
  );
}
