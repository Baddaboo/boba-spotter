import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, withStyles } from '@material-ui/core';
import { Help, Home, Map, ViewAgenda } from '@material-ui/icons';

const styles = theme => ({
  drawer: {
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
});

class BobaToolbar extends Component {
  handleItemClicked = (selectedIndex) => {
    var nextPath = '';
    
    switch (selectedIndex) {
      case 0:
        nextPath = '/';
        break;
      case 1:
        nextPath = '/map';
        break;
      case 2:
        nextPath = '/feed';
        break;
      case 3:
        nextPath = '/about';
        break;
      default:
        break;
    }

    this.props.history.push(nextPath);
  }

  render() {
    const { classes, isOpened, needsClose } = this.props;
    return (
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawer }}
        open={isOpened}
        onClose={needsClose}>
        <div className={classes.toolbar} />
        <List>
          <ListItem
            button
            onClick={() => this.handleItemClicked(0)}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
          <ListItem 
            button
            onClick={() => this.handleItemClicked(1)}>
            <ListItemIcon>
              <Map />
            </ListItemIcon>
            <ListItemText primary='Map' />
          </ListItem>
          <ListItem 
            button
            onClick={() => this.handleItemClicked(2)}>
            <ListItemIcon>
              <ViewAgenda />
            </ListItemIcon>
            <ListItemText primary='Feed' />
          </ListItem>
          <ListItem 
            button
            onClick={() => this.handleItemClicked(3)}>
            <ListItemIcon>
              <Help />
            </ListItemIcon>
            <ListItemText primary='About' />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withRouter(withStyles(styles)(BobaToolbar));
// withRouter needed if you're routing using Javascript
// (i.e. calling this.props.history.push())
