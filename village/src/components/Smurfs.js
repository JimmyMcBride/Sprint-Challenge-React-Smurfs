import React from 'react'
import { Link } from 'react-router-dom'

import Smurf from './Smurf'

const Smurfs = ({ smurfs }) => {
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {smurfs.map(smurf => {
          return (
            <Link to={`/${smurf.id}`} key={smurf.id}>
              <h3>{smurf.name}</h3>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

Smurf.defaultProps = {
 smurfs: [],
}

export default Smurfs
