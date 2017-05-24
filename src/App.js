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
      'thing-3': { id: 'thing-3', name: 'Lettuce' }
    }
  }

  // state changing methods need to be here, and passed as props to children

  render() {
    return (
      <div className="App">
        <Header />
        <AddThing />
        <ThingList things={this.state.things} />
      </div>
    )
  }
}

export default App
