import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

import './Thing.css'
import RemoveThing from './RemoveThing'

class Thing extends Component {
  updateName = (ev) => {
    const { thing, saveThing} = this.props
    thing.name = ev.target.value
    saveThing(thing)
  }

  render() {
    const { thing, removeThing } = this.props

    return (
      <li className="Thing">
        <input type="checkbox" value="on" />
        <div className="details">
          <ContentEditable
            className="name"
            html={thing.name}
            onChange={this.updateName}
          />
          <RemoveThing
            thing={thing}
            removeThing={removeThing}
          />
        </div>
      </li>
    )
  }
}

export default Thing
