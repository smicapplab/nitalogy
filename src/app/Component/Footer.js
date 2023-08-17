"use client";

import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import EmailIcon from "@mui/icons-material/Email";
import InputText from "./InputText";

export default function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {matches && (
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          sx={{
            marginTop: 15,
            padding: 5,
            backgroundColor: "#323232",
            color: "#ffffff",
          }}
        >
          <Grid container spacing={2}>
          <Grid item md={4}>
            
          </Grid>
            <Grid
              item
              md={4}
              sx={{ display: "flex", flexDirection: "column" }}
            >
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
                    sx={{ color: "#000000", backgroundColor: "#ffffff" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button variant="text" endIcon={<EmailIcon />}>
                            Send
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </div>
            </Grid>
            <Grid item md={4}>
              <h2 className="text-xl font-medium">Contact Us</h2>
              <InputText
                placeholder="Full Name"
                onChange={() => {}}
                name="fullName"
              />
              <InputText
                placeholder="Email Address"
                onChange={() => {}}
                name="email"
              />
              <InputText
                rows={5}
                placeholder="Message"
                onChange={() => {}}
                name="message"
              />
              <Button variant="contained" color="tertiary" sx={{ backgroundColor: "white" }}>Submit</Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}
