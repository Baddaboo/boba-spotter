import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { AppBar, Button, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
import { Person, Menu } from '@material-ui/icons';

// Here, we're declaring a style class and applying it using withStyles() at the
// bottom. This is a special feature of Material UI which is essentially the
// same as creating a "BobaToolbar.css" and importing it.
const styles = theme => ({
  appBar: {
    textAlign: 'center',
    zIndex: 1400,
  },
  loginButtonIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 20,
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0
  }
});

class BobaToolbar extends Component {
  render() {
    const { classes, onMenuClicked } = this.props;
    return (
      <AppBar
        className={classes.appBar}
        position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography 
              variant="h6" 
              color="inherit"
              className={classes.title}>
              Boba Spotter (Beta)
            </Typography>
          {
            // This button passes its onClick prop to the onMenuClicked prop.
            // If you look back at App.js, this essentially tells App to open
            // the drawer.
          }
          <IconButton
            className={classes.menuButton}
            color="inherit" 
            onClick={onMenuClicked}>
            <Menu />
          </IconButton>
          {
            // This button uses the Link component to redirect the user to the
            // login page. Note that BobaToolbar doesn't need withRouter
            // because it's built into the Link component.
          }
          <Button
            color="inherit"
            className={classes.loginButton}
            component={Link}
            to="/login">
            <Person className={classes.loginButtonIcon}/>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(BobaToolbar);
