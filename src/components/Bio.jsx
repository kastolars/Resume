import React, { Component } from 'react'
import '../styles/Bio.css'

export const BioBody = () => (
    <div>
        <div className="bio-body">
            <ul className="bio-list">
                <li>
                    <h2>
                        A little about me:
                    </h2>
                </li>
                <hr></hr>
                <li>
                    I live in Chicago.
            </li>
                <li>
                    I love to build things with computers.
                </li>
                <li>
                    I have a passion for technology.
                </li>
                <li>
                    I want to make an impact on the world.
                </li>
                <li>

                </li>
            </ul>
        </div>
    </div>

)

class BioHeader extends Component {
    render() {
        return (
            <div ref={this.props.ref} className="bio">
                <h1 className="bio-header">
                    Hello world!
                </h1>
            </div>

        )
    }
}

export default BioHeader