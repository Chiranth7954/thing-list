import React, { Component } from 'react'

import './App.css'
import Header from './Header'
import SignIn from './SignIn'
import SignOut from './SignOut'
import AddThing from './AddThing'
import ThingList from './ThingList'
import base from './base'

class App extends Component {
  componentWillMount() {
    base.syncState(
      'things',
      {
        context: this,
        state: 'things'
      }
    )
  }

  state = {
    things: {},
  }

  renderThing() {
    return {
      id: `thing-${Date.now()}`,
      name: '',
      completed: false,
      dueOn: null,
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

  removeThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = null
    this.setState({ things })
  }

  signedIn = () => {
    return false
  }

  renderMain = () => {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
    }

    return (
      <div>
      <SignOut />
      <AddThing addThing={this.addThing} />
      <ThingList
        things={this.state.things}
        {...actions}
      />
    </div>
    )
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.signedIn() ? this.renderMain() : <SignIn />}
      </div>
    )
  }
}

export default App
