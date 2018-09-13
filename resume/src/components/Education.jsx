import React, { Component } from 'react'
import '../styles/Education.css'

class Education extends Component {
    render() {
        return (
            <div >
                <div className="education-header-container">
                    <h2 className="education-header">
                        [EDUCATION]
    </h2>
                </div>
                <div className="education-info">
                    <div className="school-info">
                        <div className="school-logo-container">
                            <img
                                src="https://i1.wp.com/codcourier.org/wp-content/uploads/2018/05/562px-UIC_Logo.png?fit=562%2C600&ssl=1"
                                width="33%"
                                height="33%"
                                alt="uic-logo"
                                className="school-logo"
                            />
                        </div>
                        <div className="school-brief-container">
                            <ul className="school-brief">
                                <li>
                                    College of Engineering, Aug 2016 - Present
                                                </li>
                                <li>
                                    B.S. in Computer Science
                                                </li>
                                <li>
                                    Dean's List, Fall 2016
                                </li>
                                <li>
                                    GPA: 3.80
                                                </li>
                                <li>
                                    Expected Graduation Date: Dec 2019
                                            </li>
                            </ul>
                        </div>

                        <h4 className="relevant-coursework-header">
                            Relevant Coursework:
                </h4>
                        <div className="relevant-coursework-container">

                            <ul className="relevant-coursework">
                                <li>
                                    Data Structures
                        </li>
                                <li>
                                    Languages and Automata
                        </li>
                                <li>
                                    Machine Organization
                        </li>
                                <li>
                                    Mathematical Foundations of Computing
                        </li>
                                <li>
                                    Programming Practicum
                        </li>
                                <li>
                                    C/C++ Programming
                        </li>
                                <li>
                                    Probability and Statistics for Engineers
                        </li>
                                <li>
                                    Calculus I, II, III
                        </li>
                                <li>
                                    Introduction to Statistics for Life Sciences
                        </li>
                                <hr></hr>
                                <li>
                                    Introduction to Data Science (In Progress)
                        </li>
                                <li>
                                    Software Design (In Progress)
                        </li>
                                <li>
                                    Programming Language Concepts (In Progress)
                        </li>
                                <li>
                                    Applied Linear Algebra (In Progress)
                        </li>
                                <li>
                                    Systems Programming (In Progress)
                        </li>
                                <li>
                                    Computer Design (In Progress)
                        </li>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="school-logo-container">
                            <img
                                src="https://www.coursehero.com/img/school_seals/784.jpg"
                                width="40%"
                                height="40%"
                                alt="wrightlogo"
                                className="school-logo"
                            />
                        </div>
                        <div className="school-brief-container">
                            <ul className="school-brief">
                                <li>
                                    Associate of Science - General Studies
                                                </li>
                                <li>
                                    Completed July 2016
                                            </li>
                                <li>
                                    Recipient of CCCTU Wright Local 1600 Student Scholarship Award
                                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Education