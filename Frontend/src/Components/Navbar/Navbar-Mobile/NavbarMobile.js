import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import "./NavbarMobile.css";

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
}));

const NavbarMobile = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const drawer = (
    <div>
      <List>
        <ListItem button key="1">
          <p className="nav-mobile-items">
            <Link to="/">HOME</Link>
          </p>
        </ListItem>
        <ListItem button key="2">
          <p className="nav-mobile-items">
            <Link to="/">ABOUT</Link>
          </p>
        </ListItem>
        <ListItem button key="3">
          <p className="nav-mobile-items">
            <Link to="/">CONTACT</Link>
          </p>
        </ListItem>
        <ListItem button key="4">
          <p className="nav-mobile-items">
            <Link to="/">LOGIN</Link>
          </p>
        </ListItem>
        <ListItem button key="3">
          <p className="nav-mobile-items">
            <Link to="/signup">SIGNUP</Link>
          </p>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root} style={{ marginBottom: "8.5rem" }}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "white" }}
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            style={{ color: "black" }}
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

NavbarMobile.propTypes = {
  container: PropTypes.object,
};

export default NavbarMobile;
