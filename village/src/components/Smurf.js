import React from 'react'
import { Link } from 'react-router-dom'

const Smurf = ({ smurfs, deleteSmurf, updateSmurf, match }) => {
  const smurf = smurfs.find(
    smurf => `${smurf.id}` === match.params.id
  )
  if (!smurfs.length || !smurf) {
    return <div></div>
  }
  return (
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <button onClick={() => deleteSmurf(smurf.id)}>Delete Smurf</button>
      {/* <button onClick={() => updateSmurf(smurf.id)}>Update Smurf</button> */}
      <div>
        <Link to='/'>
          <button>Back to Smurf Village</button>
        </Link>
      </div>
    </div>
  )
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
}

export default Smurf

