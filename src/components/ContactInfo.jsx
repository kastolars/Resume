import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap'
import '../styles/ContactInfo.css'
import profile from '../images/Karol Stolarski.jpg'

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-container">
                <div className="profile-pic-container">
                    <img
                        src={profile}
                        className="profile-pic"
                        width="25%"
                        height="25%"
                        alt="profile-pic"
                    />
                </div>

                <h3 className="contact-info-header">
                    Let's connect!
    </h3>
                <hr></hr>
                <div className="contact-info">

                    <ul className="contact-info-list">
                        <li>
                            <Glyphicon glyph="envelope" />
                            &nbsp;
                            emailAddress =
                            &#123;
                            &nbsp;
                        <a href="mailto:kstola2@uic.edu">kstola2@uic.edu</a>
                            &nbsp;
                            &#125;
                    </li>
                        <li>
                            <Glyphicon glyph="equalizer" />
                            &nbsp;
                            github =
                            &#123;
                            &nbsp;
                    <a href="https://github.com/kstola2">github.com/kstola2</a>
                            &nbsp;
                            &#125;
                </li>
                        <li>
                            <Glyphicon glyph="user" />
                            &nbsp;
                            linkedin =
                            &#123;
                            &nbsp;
                    <a href="https://www.linkedin.com/in/karol-stolarski/">linkedin.com/in/karol-stolarski</a>
                            &nbsp;
                            &#125;
                </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ContactInfo