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
    // This drawer is getting its state from App.js. You might be wondering why
    // there are two props for drawer's state. That's because React is
    // state-driven. Whereas in other platforms you might call drawer.toggle(), 
    // React uses state to figure out how to draw components and, more 
    // importantly, only update the components that need updating when 
    // setState() is called.
    //
    // So can you still wrap all this state stuff in drawer.toggle() in this
    // component? Sure you can. Simply move the isDrawerOpen boolean into the
    // BobaDrawer component and add a ref to it in App.js. More on that here:
    // https://ourcodeworld.com/articles/read/327/how-to-execute-child-component-function-from-the-parent-component-in-react
    //
    // However I highly, highly recommend using state in the parent wherever
    // possible. It helps React manage and update state more efficiently and
    // means less guesswork on your part to figure out what a child's state is
    // at any moment in the UI.
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
// withRouter is needed if you're routing using Javascript
// (i.e. calling this.props.history.push())
