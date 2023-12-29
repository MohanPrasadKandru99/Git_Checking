import React, { Component } from 'react'

function HOC(Component) {
    return (
        class extends React.Component {
            state = {
                isLoggedInn: true
            }
            render() {
                return (
                    <div>
                        {
                            this.state.isLoggedInn ? <Component /> :
                                <h1>You are unable to Log in.</h1>
                        }

                    </div>
                )
            }

        }

    )
}

export default HOC