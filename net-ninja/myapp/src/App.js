import React, { Component } from 'react';
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ninjas: [
        { name: 'Ryu', age: 30, belt: 'black', id: 1 },
        { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
        { name: 'Crystal', age: 25, belt: 'black', id: 3 },
      ]
    }
  }
  addNinja = (ninja) => {
    const newNinja = {...ninja};
    newNinja.id = Math.max.apply(Math, this.state.ninjas.map(function(ninja) { return ninja.id; })) + 1;
    this.setState({
      ninjas: [...this.state.ninjas, newNinja]
    });
  }
  deleteNinja = (id) => {
    const ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    });
  }
  componentDidMount() {
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My react app</h1>
        <p>Welcome</p>
        <Ninjas ninjas={ this.state.ninjas } deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
