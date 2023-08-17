"use client";

import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/navigation";

export const pages = [
  { label: "Home", url: "../iteration1" },
  { label: "Articles", url: "/iteration1/articles" },
  { label: "Resources", url: "/iteration1/resources" },
  { label: "Groups", url: "/iteration1/groups" },
  { label: "About Us", url: "/iteration1/about-us" },
  { label: "Contact Us", url: "/iteration1/contact-us" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Navigation() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const localUser = localStorage.getItem("localUser");
    if (localUser) {
      setLoggedInUser(JSON.parse(localUser));
    }
  }, []);

  return (
    <AppBar sx={{ backgroundColor: "#ffffff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img
              src="/images/logo.png"
              alt="logo"
              className="h-16 cursor-pointer"
              onClick={() => router.push("/iteration1")}
            />
            <Button
              onClick={() => router.push("/iteration1")}
              sx={{ textTransform: "none" }}
            >
              <h1 className="text-black font-bold pt-5 text-lg">
                Behind The Screen Magazine
              </h1>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className="text-black" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem onClick={handleCloseNavMenu} key={page.label}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, mr: 2 }}>
            <img src="/images/logo.png" alt="logo" className="h-16" />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  textTransform: "none",
                  marginRight: 6,
                }}
                onClick={() => router.push(page.url)}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {loggedInUser ? (
            <Box sx={{ flexGrow: 0, paddingLeft: 5 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={loggedInUser.name || ""} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  textTransform: "none",
                  marginRight: 6,
                }}
                onClick={() => router.push("/iteration1/login")}
              >
                Login
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
