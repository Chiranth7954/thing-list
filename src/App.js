import React, { Component } from 'react'

import './App.css'
import Header from './Header'
import AddThing from './AddThing'
import ThingList from './ThingList'

class App extends Component {
  state = {
    things: {},
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

  saveThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = thing
    this.setState({ things })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddThing addThing={this.addThing} />
        <ThingList
          things={this.state.things}
          saveThing={this.saveThing}
        />
      </div>
    )
  }
}

export default App
