import React, { Component } from 'react'
import '../styles/Skills.css'
import { Carousel } from 'react-bootstrap'
import java from '../images/java-logo.jpg'
import react from '../images/react-js-logo.jpg'
import python from '../images/python-logo.jpg'
import ccplusplus from '../images/cc++.jpg'
import sql from '../images/postgres-logo.jpg'
import go from '../images/go.jpg'

class Skills extends Component {
    render() {
        return (
            
            <div className="skills-container">
                <div className="skills-header-container">
                    <h2 className="skills-header">
                        [SKILLS]
        </h2>
                </div>
                <div className="carousel-container">
                    <Carousel className="carousel">
                        <Carousel.Item className="carousel-item">
                            <img
                                width={900}
                                height={500}
                                alt="java-logo"
                                src={java}
                                className="skills-img"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img
                                width={900}
                                height={500}
                                alt="python"
                                src={python}
                                className="skills-img"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img
                                width={900}
                                height={500}
                                alt="react-logo"
                                src={react}
                                className="skills-img"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img
                                width={900}
                                height={500}
                                alt="cc++"
                                src={ccplusplus}
                                className="skills-img"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img
                                width={900}
                                height={500}
                                alt="sql"
                                src={sql}
                                className="skills-img"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img
                                width={900}
                                height={500}
                                alt="go"
                                src={go}
                                className="skills-img"
                            />
                        </Carousel.Item>
                    </Carousel>;
                </div>
            </div>
        )
    }
}

export default Skills