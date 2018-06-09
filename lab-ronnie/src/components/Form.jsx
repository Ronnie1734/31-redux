import React from 'react';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: "type somethin"
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
    return <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.category} onChange={this.handleChange}/>
      <button type="submit">add</button>
  </form>

  }

}

