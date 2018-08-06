import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import socketIOClient from 'socket.io-client';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import SocketContext from './socketContext';
import CreateItem from './create-item';
import NewAccount from './components/new-account';
import Account from './components/account';
import Item from './components/location';
import ListItems from './components/locations';
import SignIn from './components/sign-in';
import SignOut from './components/sign-out';
import { Provider } from 'react-redux';
import store from './store';

import {
  Route,
  Switch,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

const socket = socketIOClient({
  response: false,
  endpoint: "http://127.0.0.1:3001"
});

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {
  state = {
    items: [],
    left: false,
  };

  toggleDrawer(side, open) {
    return () => {
      this.setState({
        [side]: open,
      });
    }
  }

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { classes } = this.props;

    const sideList = (
    <div className={classes.list}>
      <List>
        <ListItem>
          <Button color="inherit" component={NavLink} to="/locations">
            All Locations
          </Button>
        </ListItem>
        <ListItem>
          <Button color="inherit" component={NavLink} to="/locations/new">
            New Location
          </Button>
        </ListItem>
        <ListItem>
          <Button color="inherit" component={NavLink} to="/accounts/new">
            Sign Up
          </Button>
        </ListItem>
        <ListItem>
          <Button color="inherit" component={NavLink} to="/accounts/sign-in">
            Log In
          </Button>
        </ListItem>
        <ListItem>
          <Button color="inherit" component={NavLink} to="/accounts/sign-out">
            Log Out
          </Button>
        </ListItem>
      </List>
      <Divider />
    </div>
    );

    return (
      <Provider store={store}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon onClick={this.toggleDrawer('left', true)}/>
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                The Lake
              </Typography>

              <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer('left', false)}
                  onKeyDown={this.toggleDrawer('left', false)}
                >
                  {sideList}
                </div>
              </Drawer>

            </Toolbar>
          </AppBar>

          <Switch>
            <Route exact path="/locations/new" component={CreateItem}/>
            <Route exact path="/locations" component={ListItems}/>
            <Route path="/locations/:id" component={Item}/>
            <Route exact path="/accounts/new" component={NewAccount}/>
            <Route exact path="/accounts/sign-in" component={SignIn} key="sign-in"/>
            <Route exact path="/accounts/sign-out" component={SignOut} key="sign-out"/>
            <Route path="/accounts/:id" component={Account} key="get-account"/>
          </Switch>
        </div>
      </Provider>
    );
  }
}

function AppWrapper(props) {
  return (
    <SocketContext.Provider value={socket}>
      <Router>
        <App {...props} />
      </Router>
    </SocketContext.Provider>
  )
}

export default withStyles(styles)(AppWrapper);
