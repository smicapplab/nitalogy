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
import EmailIcon from "@mui/icons-material/Email";
import InputText from "./InputText";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sofia_Sans } from "next/font/google";
const sofia = Sofia_Sans({ subsets: ["latin"], weight: "800" });

export const links = [
  { label: "About Us", url: "/iteration1/about-us" },
  { label: "Contact Us", url: "/iteration1/contact-us" },
  { label: "Privacy", url: "/iteration1/privacy" },
  { label: "Terms & Condition", url: "/iteration1/terms" },
  { label: "Advertising Policy", url: "/iteration1/advertising" },
];

export default function Footer() {
  const [email, setEmail] = useState(null);
  const [contact, setContact] = useState({});
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
        backgroundColor: "#000000",
        color: "#ffffff",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={2}>
          <h1 className={`${sofia.className} text-lg`}>Company</h1>
          <ul>
            {links.map((link) => (
              <li key={link.label}
                className="cursor-pointer pt-2 text-white ml-2"
                onClick={() => router.push(link.url)}
              >
                {link.label}
              </li>
            ))}
          </ul>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <h1 className={`${sofia.className} text-lg`}>Subscribe</h1>
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
                        endIcon={<EmailIcon sx={{ color: "#000000" }} />}
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
          <h1 className={`${sofia.className} text-lg`}>Contact Us</h1>
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
          <div className={`${sofia.className} text-lg p-2 bg-white text-black w-24 text-center rounded cursor-pointer`} onClick={onsubmitForm}>
            SUBMIT
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
