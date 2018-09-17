import React, { Component } from 'react'
import { Glyphicon, Navbar, Nav, NavDropdown, MenuItem, Grid, Row, Col } from 'react-bootstrap'
import '../styles/App.css'
import scrollToComponent from 'react-scroll-to-component';


import BioHeader, { BioBody } from './Bio'
import ContactInfo from './ContactInfo'
import Education from './Education'
import WorkExperience from './WorkExperience'
import Skills from './Skills'
import Projects from './Projects'
import Memberships from './Memberships'

class App extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(name, offset = 0) {
        scrollToComponent(name, { offset, align: 'top', duration: 600, ease: 'inExpo' })
    }


    render() {
        return (
            <div className="app" ref={(div) => { this.top = div }}>
                <Navbar className="nav-bar"
                    fixedTop
                    inverse
                >
                    <Grid>
                        <Row>
                            <Col xsOffset={5}>
                                <Navbar.Header className="nav-header">
                                    KAROL STOLARSKI
                    </Navbar.Header>
                            </Col>
                            <Col >
                                <Nav className="nav-body" pullRight>
                                    <NavDropdown id="Drop down" eventKey={1} title={<Glyphicon glyph="list" className="list-glyph" />} className="nav-drop-down">
                                        <MenuItem eventKey={1.1} onClick={() => this.handleClick(this.top)}>Back to Top&nbsp;<Glyphicon glyph="arrow-up" /></MenuItem>
                                        <MenuItem eventKey={1.2} onClick={() => this.handleClick(this.education, -70)}>Education</MenuItem>
                                        <MenuItem eventKey={1.3} onClick={() => this.handleClick(this.workexp, -70)}>Work Experience</MenuItem>
                                        <MenuItem eventKey={1.4} onClick={() => this.handleClick(this.projects, -70)}>Projects</MenuItem>
                                        <MenuItem eventKey={1.5} onClick={() => this.handleClick(this.skills, -60)} >Skills</MenuItem>
                                        <MenuItem eventKey={1.6} onClick={() => this.handleClick(this.memberships, -60)}>Memberships</MenuItem>
                                        <MenuItem eventKey={1.7} onClick={() => this.handleClick(this.contact)}>Contact Info</MenuItem>
                                    </NavDropdown>
                                </Nav>
                            </Col>
                        </Row>
                    </Grid>
                </Navbar>
                <div className="blocks-pic-container">
                    <img
                        src="https://media3.giphy.com/media/l0HlwdoVlUfDBV8ac/giphy.gif"
                        className="blocks-pic"
                        alt="blocks"
                    />
                </div>
                <BioHeader />
                <BioBody />
                <Education ref={(Education) => { this.education = Education }} />
                <WorkExperience ref={(WorkExperience) => { this.workexp = WorkExperience }} />
                <Projects ref={(Projects) => { this.projects = Projects }} />
                <Skills ref={(Skills) => { this.skills = Skills }} />
                <Memberships ref={(Memberships) => { this.memberships = Memberships }} />
                <ContactInfo ref={(ContactInfo) => { this.contact = ContactInfo }} />
                <div className="sig">
                    <h4>
                        Author: Karol Stolarski
                </h4>
                </div>
            </div>
        )
    }
}

export default App