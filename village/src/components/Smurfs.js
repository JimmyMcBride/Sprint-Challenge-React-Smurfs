import React from 'react'

import Smurf from './Smurf'

const Smurfs = ({ smurfs, deleteSmurf }) => {
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {smurfs.map(smurf => {
          return (
            <Smurf
              smurfs={smurf}
              key={smurf.id}
              deleteSmurf={deleteSmurf}
            />
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
