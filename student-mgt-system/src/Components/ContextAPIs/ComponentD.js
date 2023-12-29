import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentD extends Component {
  render() {
    return (
      <div>ComponentD
        <UserConsumer>
            {
                (userid)=>{
                    return(
                        <h1>
                            {userid}
                        </h1>
                    )
                }
            }
        </UserConsumer>
      </div>
    )
  }
}

export default ComponentD