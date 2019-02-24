import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './views/Home';
import BobaAbout from './views/BobaAbout';
import BobaFeed from './views/BobaFeed';
import BobaMap from './views/BobaMap';
import BobaLogin from './views/BobaLogin';

import BobaDrawer from './components/BobaDrawer';
import BobaToolbar from './components/BobaToolbar';

import './App.css';
import './styles/global.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawerOpen: false,
    }
  }

  toggleDrawer = () => {
    let { isDrawerOpen } = this.state;
    
    isDrawerOpen = !isDrawerOpen;

    this.setState({ isDrawerOpen });

    // Woah woah woah, what's this syntax? Turns out Javascript has some tricks
    // that reduce redundancy in your code. I'm explaining it here, because you 
    // might see it in examples and code samples online. These include:
    //
    // Destructuring Assignment Shorthand
    //     let { isDrawerOpen } = this.state;
    //     is the same as: let isDrawerOpen = this.state.isDrawerOpen;
    //
    // Object Property Value Shorthand
    //     this.setState({ isDrawerOpen });
    //     is the same as: this.setState({ isDrawerOpen: isDrawerOpen });
  }

  render() {
    return (
      <div className="App">
        {
          // The basename needs to be set to process.env.PUBLIC_URL so that the
          // URL doesn't conflict with your existing *.github.io page.
        }
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          {
            // The latest version of react-router only allows for routing within
            // a router object. This means that any components that need routing
            // must also be children of the router itself.
          }
          <div className="fillParent">
            {
              // These props (onMenuClicked, isOpened, needsClose) are used to
              // help coordinate action between a component and its child. We
              // call this two-way binding.
              //
              // In this example, BobaToolbar is using its onMenuClicked prop to
              // tell App that its menu button has been clicked. Then App sets
              // its isDrawerOpen to be true, telling BobaDrawer to open.
              // Likewise, BobaDrawer uses needsClose to tell App when the user
              // clicks out of the drawer and it needs to be closed.
              // 
            }
            <BobaToolbar onMenuClicked={this.toggleDrawer} />
            <BobaDrawer
              isOpened={this.state.isDrawerOpen}
              needsClose={this.toggleDrawer} />
            <Route exact path="/" component={Home} />
            <Route path="/feed" component={BobaFeed} />
            <Route path="/map" component={BobaMap} />
            <Route path="/about" component={BobaAbout} />
            <Route path="/login" component={BobaLogin} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
