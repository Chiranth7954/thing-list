import React, { Component } from 'react'

import './App.css'
import Header from './Header'
import AddThing from './AddThing'
import ThingList from './ThingList'

class App extends Component {
  state = {
    things: {
      'thing-1': { id: 'thing-1', name: 'Milk' },
      'thing-2': { id: 'thing-2', name: 'Bread' },
      'thing-3': { id: 'thing-3', name: 'Bibb lettuce' },
    },
  }

  renderThing() {
    return {
      id: `thing-${Date.now()}`,
      name: '',
    }
  }

  addThing = () => {
    const things = {...this.state.things}
    const thing = this.renderThing()
    things[thing.id] = thing
    this.setState({ things })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddThing addThing={this.addThing} />
        <ThingList things={this.state.things} />
      </div>
    )
  }
}

export default App
