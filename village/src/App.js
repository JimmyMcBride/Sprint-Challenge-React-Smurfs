import React, { Component } from 'react'
import axios from 'axios'
import { Route, NavLink } from 'react-router-dom'

import './App.css'

import SmurfForm from './components/SmurfForm'
import Smurfs from './components/Smurfs'
import Smurf from './components/Smurf'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      smurfs: [],
    }
  }

  componentDidMount = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        const smurfs = res.data
        this.setState({ smurfs })
      })
      .catch(err => console.error(err))
  }

  addSmurf = newSmurf => {
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        const smurfs = res.data
        this.setState({ smurfs })
      })
      .catch(err => console.error(err))
  }

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        const smurfs = res.data;
        this.setState({ smurfs })
      })
      .catch(err => console.error(err))
  }

  // updateSmurf = smurf => {
  //   axios
  //     .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
  //     .then(res => {
  //       const smurfs = res.data;
  //       this.setState({ smurfs })
  //     })
  //     .catch(err => console.error(err))
  // }

  render() {
    return (
      <div className="App">
        <NavLink to='/smurf-form'>Add New Smurf to Village</NavLink>
        <Route
          path='/smurf-form'
          render={() => (
            <SmurfForm addSmurf={this.addSmurf} />
          )}
        />
        <Route
          path='/'
          exact
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
            />
          )}
        />
        <Route
          path='/:id'
          render={props => (
            <Smurf
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              updateSmurf={this.updateSmurf}
            />
          )}
        />
      </div>
    )
  }
}

export default App
