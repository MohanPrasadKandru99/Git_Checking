import React, { Component } from 'react'
import HomeStd from './HomeStd'

export class AddStd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      mobile: ''
    }
  }
  addingData = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  submitHandler = (event) => {
    event.preventDefault()
    fetch('http://localhost:3500/posts', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(this.state)
    }).then(result => {
      console.log(result);
      if(result.status == 201){
        alert('Student data has been added successfully')
        window.location='http://localhost:3000'
      }
    })
  }
  render() {
    const { name, mobile } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type='text' className='form-control' id='name' name='name' value={name} placeholder='Enter Student Name' onChange={this.addingData} />
          <br />
          <br />
          <input type='text' className='form-control' id='mobile' name='mobile' value={mobile} placeholder='Enter Student Mobile No.' onChange={this.addingData} />
          <br />
          <br />
          <button className='btn btn-success' type='submit'>Add Student Data</button>
        </form>
      </div>
    )
  }
}

export default AddStd