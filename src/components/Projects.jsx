import React, { Component } from 'react'
import blockchain from '../images/blockchain.png'
import '../styles/Projects.css'

class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <div className="projects-header-container">
                    <h2>
                        [PROJECTS]
                </h2>
                </div>
                <div className="projects-body-container">
                    <div className="project">
                        <h3 className="project-title">
                            <a href="https://github.com/kstola2/Blockchain">
                                BLOCKCHAIN FROM SCRATCH
                            </a>
                        </h3>
                        <div className="project-screen-container">
                            <img
                                src={blockchain}
                                alt="blockchain-screenshot"
                                className="project-screen"
                                height="75%"
                                width="75%"
                            />
                        </div>
                        <div className="project-description">
                            <p>
                                Using Python, I built a blockchain from scratch.
                        </p>
                            <p>
                                This required knowledge of networks, data structures, cryptography, and databases.
                        </p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="projects-body-container">
                    <div className="project">
                        <h3 className="project-title title-B">
                            <a href="https://github.com/kstola2/Machine-Learning">
                                MACHINE LEARNING
                            </a>
                        </h3>
                        <div className="project-description">
                        <p>
                            Constructed two machine learning models using Anaconda and Spyder
                        </p>
                        <p>
                            One is a health insurance cost regressor model and the other is an adult income classifier
                        </p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="projects-body-container">
                    <div className="project">
                        <h3 className="project-title title-C">
                                RESUME WEBSITE
                        </h3>

                        <div className="project-description">
                            <p>
                                Built this wonderful website to demonstrate my JavaScript abilities.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Projects