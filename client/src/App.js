import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';

class App extends Component {
  state = {items: []}

  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.nameChanged = this.nameChanged.bind(this);
    this.colorChanged = this.colorChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/items')
      .then(res => res.json())
      .then(items => this.setState({ items: items }));
  }

  addItem() {
    fetch('/items', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'tom',
        color: 'brown',
      })
    }).then(response => response.json())
      .then(item => {
        var list = this.state.items.concat(item);
        this.setState({ items: list });
      });
  }

  deleteAll() {
    fetch('/items/delete')
      .then(response => this.setState({ items: []}));
  }

  nameChanged(event) {
    this.setState({name: event.target.value});
  }

  colorChanged(event) {
    this.setState({color: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('/items', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        color: this.state.color,
      })
    }).then(response => response.json())
      .then(item => {
        var list = this.state.items.concat(item);
        this.setState({ items: list });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Location</h1>
        {this.state.items.map(item =>
          <div key={item._id}>{item.name} - {item.color}</div>
        )}

        <form key="create" onSubmit={this.handleSubmit}>
          <FormLabel>Name:</FormLabel>
          <TextField type="text" name="name" key="name" onChange={this.nameChanged}/>
          <FormLabel>Color:</FormLabel>
          <TextField type="text" name="color" key="color" onChange={this.colorChanged}/>
          <Button type="submit">Create</Button>
        </form>

        <Button onClick={this.addItem} color="primary">New</Button>
        <Button onClick={this.deleteAll} color="secondary">Delete All</Button>
      </div>
    );
  }
}

class Create extends Component {
  activateLasers() {
    fetch('/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'tom',
        color: 'broasdfwn',
      })
    }).then(response => response.json())
      .then(this.props.addItem);
  }

  render() {
    return (
      <button onClick={this.activateLasers.bind(this)}>
        Activate Lasers
      </button>
    );
  }
}

export default App;
