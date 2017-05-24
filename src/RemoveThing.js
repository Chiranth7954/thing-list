import React from 'react'

import './RemoveThing.css'

const RemoveThing = ({ thing, removeThing }) => {
  return (
    <span className="Actions">
      <button
        className="remove"
        onClick={() => removeThing(thing)}
      >
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  )
}

export default RemoveThing
