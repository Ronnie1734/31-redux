import React from 'react';
import {connect} from 'react-redux';
import {createCategory, updateCategory, destroyCategory} from '../actions/index.js';
import uuidv4 from 'uuid/v4';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      budget: 0,
      id: uuidv4(),
      timestamp: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleSubmit(ev) {
    ev.preventDefault()
    let id = uuidv4();
    let timestamp = Date.now()
    this.setState({ id, timestamp })
    console.log(this.state);
    this.props.create(this.state);
  }

  handleChange(ev) {
    console.log(ev.target.value);
    this.setState({
      [ev.target.name]: ev.target.value
    }) 
  }
  
  render() {
    return ( <form onSubmit={this.handleSubmit}>,
      <input onChange={this.handleChange} value={this.state.name} name="name" placeholder="name"></input>
      <input onChange={this.handleChange} value={this.state.budget} name="budget" placeholder="budget" type="number"></input>
      <button type="submit">add</button>
      <button type="submit">change</button>
  </form>
    )

  }

}

