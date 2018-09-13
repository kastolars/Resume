import React, { Component } from 'react'
import '../styles/WorkExperience.css'
import { Collapse, Button, CardBody, Card } from 'reactstrap'
import logo from '../images/CNA.jpg'
import group from '../images/interns.jpg'

class WorkExperience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open1: false,
            open2: false
        }
    }
    render() {
        return (
            <div className="work-experience-container">
                <div className="work-exp-header-container">
                    <h2>
                        [WORK EXPERIENCE]
                </h2>
                </div>
                <div className="work-exp-body">
                    <div className="work-exp-container"
                        style={{ paddingTop: "30px" }}
                    >
                        <div
                            className="work-img-container">
                            <img
                                src={logo}
                                height="20%"
                                width="20%"
                                alt="cna-logo"
                                className="cna-logo"
                            />
                        </div>
                        <div className="work-img-container group-pic-container">
                            <img
                                src={group}
                                height="25%"
                                width="25%"
                                className="group-pic"
                                alt="group"
                            />
                        </div>
                        <div className="work-brief-container">
                            <ul className="work-brief">
                                <li>
                                    CNA IT Summer Internship Program
                                </li>
                                <li>
                                    Job: Full Stack Developer
                                </li>
                                <li>
                                    June 2018 - August 2018
                                </li>
                            </ul>
                        </div>

                        <div className="panel-button-container">
                            <Button
                                color={this.state.open1 === true ? "primary" : "success"}
                                size="lg"
                                style={{ letterSpacing: "0.5mm" }}
                                onClick={() => this.setState({ open1: !this.state.open1 })}>
                                More Info
                            </Button>
                        </div>
                        <div className="work-details-container">
                            <Collapse isOpen={this.state.open1}>
                                <Card>
                                    <CardBody
                                        className="card-body"
                                    >
                                        <ul className="work-details">
                                            <li>
                                                Worked as a team to develop replacement for legacy customer service application.
                                </li>
                                            <li>
                                                New web based application to handle over 35,000 requests per month.
                                </li>
                                            <li>
                                                Estimated to save CNA over $150,000 per year.
                                </li>
                                            <li>
                                                Used Agile methodology and paired programming techniques.
                                </li>
                                            <li>
                                                Followed Heroku Twelve-Factor App building philosophy.
                                </li>
                                            <li>
                                                Learned to use various technologies including Spring, Postman, Jira, and Concourse.
                                </li>
                                            <li>
                                                Presented project to top officers in company.
                                </li>
                                        </ul>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </div>
                        
                    </div >
                    <div className="work-exp-container">
                        <div
                            style={{ paddingBottom: "35px" }}
                            className="work-img-container">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/8/8a/US_Army_logo.svg"
                                height="15%"
                                width="15%"
                                alt="cna-logo"
                            />
                        </div>
                        <div className="work-brief-container">
                            <ul className="work-brief">
                                <li>
                                    US Army Active Duty, Honorably Discharged
                                </li>
                                <li>
                                    Job: Healthcare Specialist
                                </li>
                                <li>
                                    October 2010 - October 2014
                                </li>
                            </ul>
                        </div>
                        <div className="panel-button-container">
                            <Button
                                color={this.state.open2 === true ? "primary" : "success"}
                                size="lg"
                                style={{ letterSpacing: "0.5mm" }}
                                onClick={() => this.setState({ open2: !this.state.open2 })}>
                                More Info
                            </Button>
                        </div>
                        <div className="work-details-container">
                            <Collapse isOpen={this.state.open2}>
                                <Card>
                                    <CardBody
                                        className="card-body"
                                    >
                                        <ul className="work-details">
                                            <li>
                                                Deployed to Afghanistan in 2012 and 2014 to support Operation Enduring Freedom.
                                </li>
                                            <li>
                                                Attained and maintained a Secret Clearance for 4 years.
                                </li>
                                            <li>
                                                Received multiple awards certified by commanders for accomplishments and exceptional performance.
                                </li>
                                        </ul>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </div>
                    </div>
                    
                </div >
            </div >
        )
    }
}

export default WorkExperience