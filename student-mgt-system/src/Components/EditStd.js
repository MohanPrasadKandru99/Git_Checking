import React, { Component } from 'react'

export class EditStd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            mobile: ''
        }
    }
    addingData = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    componentDidMount() {
        var std_id = window.location.pathname.split('/')[2]
        console.log(std_id);
        fetch('http://localhost:3500/posts/'+std_id, {
            method: 'GET'
        }).then(result=>{
            return result.json()
        }).then(res=>{
            if(res!=null){
                this.setState({
                    id:res.id,mobile:res.mobile,name:res.name
                })
            }
            console.log('data--', res);
        })
    }
    submitHandler = (event) => {
        event.preventDefault()
        fetch('http://localhost:3500/posts/'+this.state.id, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(this.state)
        }).then(result => {
            console.log(result);
            if (result.status === 200) {
                alert('Student data has been added successfully')
                this.setState({
                    id:'',name:'',mobile:''
                })
            }
        })
    }
    render() {
        const { id, name, mobile } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type='text' className='form-control d-none' id='id' name='id' value={id} placeholder='Student ID' onChange={this.addingData}/>
                    <br />
                    <br />
                    <input type='text' className='form-control' id='name' name='name' value={name} placeholder='Enter Student Name' onChange={this.addingData} />
                    <br />
                    <br />
                    <input type='text' className='form-control' id='mobile' name='mobile' value={mobile} placeholder='Enter Student Mobile No.' onChange={this.addingData} />
                    <br />
                    <br />
                    <button className='btn btn-success' type='submit'>Modify Student Data</button>
                </form>
            </div>
        )
    }
}

export default EditStd