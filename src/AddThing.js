import React from 'react'

import './AddThing.css'

const AddThing = ({ addThing }) => {
  return (
    <button
      className="AddThing"
      onClick={addThing}
    >
      Add Thing
    </button>
  )
}

export default AddThing
