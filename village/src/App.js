import React, { Component } from 'react'
import axios from 'axios'

import './App.css'

import SmurfForm from './components/SmurfForm'
import Smurfs from './components/Smurfs'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      smurfs: [],
    };
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

  render() {
    return (
      <div className="App">
        <SmurfForm addSmurf={this.addSmurf} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App
