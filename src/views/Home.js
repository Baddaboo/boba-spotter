import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import classNames from 'classname';

import '../styles/global.css';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classNames('fillParent', classes.container)}>
        <Typography
          variant="h6" 
          color="inherit">
        Home
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
