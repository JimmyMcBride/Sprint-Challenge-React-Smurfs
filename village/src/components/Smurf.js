import React from 'react'

const Smurf = ({ smurfs }) => {
  return (
    <div className="Smurf">
      <h3>{smurfs.name}</h3>
      <strong>{smurfs.height} tall</strong>
      <p>{smurfs.age} smurf years old</p>
    </div>
  )
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
}

export default Smurf

