"use client";

import { useState, useEffect, Fragment } from "react";
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
import SearchIcon from '@mui/icons-material/Search';
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import axios from "axios";

export const pages = [
  { label: "Home", url: "../iteration3" },
  {
    label: "Articles",
    url: "#",
    sub: [
      {
        label: "Understanding Poverty Porn",
        url: "../iteration3/articles?section=understanding-poverty-porn",
      },
      {
        label: "Media Industry Spotlight",
        url: "../iteration3/articles?section=media-industry-spotlight",
      },
      {
        label: "Social Justice and Advocacy",
        url: "../iteration3/articles?section=social-justice-and-advocacy",
      },
      {
        label: "Psychological Impacts",
        url: "../iteration3/articles?section=psychological-impacts",
      },
      {
        label: "Critical Perspectives",
        url: "../iteration3/articles?section=critical-perspectives",
      },
    ],
  },
  { label: "Resources", url: "/iteration3/resources" },
  { label: "Groups", url: "/iteration3/groups" },
];

export default function Navigation() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNavClick = (event) => {
    setOpenNav(!openNav);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = (subPage) => {
    setAnchorEl(null);
    router.push(subPage.url);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseNavMenuAndRedirect = (page) => {
    setAnchorElNav(null);
    router.push(page.url);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseUserMenuAndRedirect = async () => {
    setAnchorElUser(null);
    const { data } = await axios.post("/api/auth/do-logout", {});
    if (data.success) {
      localStorage.removeItem("localUser");
      router.push("/iteration3/login");
    }
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
              src="/images/Logo3.png"
              alt="logo"
              className="h-16 cursor-pointer"
              onClick={() => router.push("/iteration3")}
            />
            <Button
              onClick={() => router.push("/iteration3")}
              sx={{ textTransform: "none" }}
            >
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
              <Paper sx={{ width: 320 }} elevation={0}>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  {!loggedInUser && (
                    <>
                      <ListItemButton
                        onClick={() => router.push("/iteration3/login")}
                      >
                        <ListItemText primary="Login" />
                      </ListItemButton>
                      <Divider />
                    </>
                  )}
                  {pages.map((page, i) => (
                    <Fragment key={i}>
                      {page.sub && page.sub.length > 0 ? (
                        <>
                          <ListItemButton onClick={() => handleNavClick()}>
                            <ListItemText primary={page.label} />
                            {openNav ? <ExpandLess /> : <ExpandMore />}
                          </ListItemButton>
                          <Collapse in={openNav} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              {page.sub.map((subPage) => (
                                <ListItemButton
                                  sx={{ pl: 4 }}
                                  onClick={() =>
                                    handleCloseNavMenuAndRedirect(subPage)
                                  }
                                >
                                  <ListItemText primary={subPage.label} />
                                </ListItemButton>
                              ))}
                            </List>
                          </Collapse>
                        </>
                      ) : (
                        <ListItemButton
                          onClick={() => handleCloseNavMenuAndRedirect(page)}
                        >
                          <ListItemText primary={page.label} />
                        </ListItemButton>
                      )}
                    </Fragment>
                  ))}
                </List>
              </Paper>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, mr: 2 }}>
            <img src="/images/Logo3.png" alt="logo" className="h-16" />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Fragment key={page.label}>
                {page.sub && page.sub.length > 0 ? (
                  <div>
                    <Button
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        textTransform: "none",
                        marginRight: 6,
                      }}
                    >
                      {page.label}
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {page.sub.map((subPage) => (
                        <MenuItem onClick={() => handleRedirect(subPage)}>
                          {subPage.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                ) : (
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
                )}
              </Fragment>
            ))}
            <IconButton size="large" onClick={ ()=> setShowSearch( !showSearch ) }>
              <SearchIcon fontSize="inherit" />
            </IconButton>
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
                <MenuItem onClick={() => router.push("/iteration3/profile")}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={() => handleCloseUserMenuAndRedirect()}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
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
                onClick={() => router.push("/iteration3/login")}
              >
                Login
              </Button>
            </Box>
          )}
        </Toolbar>
          <div className={`text-black ${ showSearch ? "visible h-20" : "invisible h-0" }`}>
            <div className="gcse-search"></div>
          </div>
      </Container>
    </AppBar>
  );
}
