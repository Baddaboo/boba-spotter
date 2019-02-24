import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import classNames from 'classname';

import '../styles/global.css';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

class BobaLogin extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classNames('fillParent', classes.container)}>
        <Typography
          variant="h6" 
          color="inherit">
        Login
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(BobaLogin);
