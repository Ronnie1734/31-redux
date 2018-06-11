import React from 'react';
import {connect} from 'react-redux';
import {createCategory, updateCategory, destroyCategory} from '../actions/index.jsx';
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
    console.log('submitted', this.state.category);
  }

  handleChange(ev) {
    console.log(ev.target.value);
    this.setState({
      category: ev.target.value
    }) 
  }
  
  render() {
    return ( <form onSubmit={this.handleSubmit}>,
      <input handleChange={this.handleChange} placeholder="name"></input>
      <input handleChange={this.handleChange} placeholder="budget" type="number"></input>
      <button type="submit">add</button>
  </form>
    )

  }

}

