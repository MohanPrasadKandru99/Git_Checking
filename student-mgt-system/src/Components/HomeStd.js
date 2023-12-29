import React, { Component } from 'react'

export class HomeStd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3500/posts', {
            method: 'GET'
        }).then(result => {
            return result.json()
        }).then(res => {
            console.log(res);
            this.setState({
                data:res
            })
        })
    }
    render() {
        const { data } = this.state
        return (
            <div className='container'>
                <br /><br />
                <h1>Student Management System</h1>
                <table className='table table-responsive table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((x,i)=>
                        <tr key={i}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.mobile}</td>
                            <td><a href={"/AddStd/"} className='btn btn-info'>Add Student Data</a></td>
                            <td><a href={"/EditStd/"+x.id} className='btn btn-warning'>Modify Student Data</a></td>
                            <td><a href={"/DeleteStd/"+x.id} className='btn btn-danger'>Delete Student Data</a></td>
                        </tr>
                        )}
                    </tbody>
                </table>
                <br />
                <br />
            </div>
        )
    }
}

export default HomeStd