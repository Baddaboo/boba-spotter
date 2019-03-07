import React, { Component } from 'react';
import { withStyles, Card, Typography } from '@material-ui/core';

import '../styles/global.css';
import Axios from 'axios';

const styles = theme => ({
  card: {
    padding: 20,
    margin: 10
  },
  toolbar: theme.mixins.toolbar,
});

class BobaFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  getPosts = () => {
    Axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { classes } = this.props;
    const { posts } = this.state;
    
    return (
      <div className="fillParent">
        <div className={classes.toolbar} />
        { posts.map(post =>
          <Card className={ classes.card }>
            <Typography color="textSecondary" gutterBottom>
              { post.title }
            </Typography>
            <Typography component="p">
              { post.body }
            </Typography>
          </Card>
        ) }
      </div>
    );
  }
}

export default withStyles(styles)(BobaFeed);
