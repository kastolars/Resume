import React, { Component } from 'react'
import "../styles/Memberships.css"

class Memberships extends Component {
    render() {
        return (
            <div className="memberships-container">
                <div className="membership-header-container">
                    <h2 className="membership-header">
                        [MEMBERSHIPS]
        </h2>
                </div>
                <div className="membership-body">
                    <div className="membership">
                        <div className="membership-img-container">
                            <img
                                src="https://avatars2.githubusercontent.com/u/20177515?s=200&v=4"
                                alt="uic-acm-logo"
                                className="membership-img"
                                height="15%"
                                width="15%"
                            />
                        </div>
                        <div className="membership-info-container">
                            <div className="membership-info-title">
                                <h3 >
                                    Association of Computing Machinery
                                    </h3>
                            </div>
                            <div className="list-container">
                                <ul className="membership-info">
                                    <li>
                                        September 2017-present
                                </li>
                                    <li>
                                        Founder and leader of SIG Blockchain
                                </li>
                                    <li>
                                        Use Agile Methodologies to coordinate a group project
                                </li>
                                    <li>
                                        SIG Project: Building a python blockchain from scratch (Sept 2017-present)
                                </li>
                                    <li>
                                        Heavy use of TCP/IP connections, cryptography, and test-driven development
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="membership">
                        <div className="membership-img-container">
                            <img
                                src="https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/1237103_600303590015305_1227459933_n.png?_nc_cat=0&oh=a5bcec40913255284ef7399ea3cd3e86&oe=5C23FF50"
                                alt="uic-sva-logo"
                                className="membership-img"
                                height="15%"
                                width="15%"
                            />
                        </div>
                        <div className="membership-info-container">
                            <div className="membership-info-title">
                                <h3 >
                                    Student Veterans of America
                                    </h3>
                            </div>
                            <div className="list-container">
                                <ul className="membership-info">
                                    <li>
                                        Secretary Officer, Aug. 2018-present
                            </li>
                                    <li>
                                        Worked with community service events including distributing meals to the homeless on Thanksgiving
                                </li>
                                    <li>
                                        Participated and completed ruck marches to raise awareness for suicide prevention
                                </li>

                                </ul>

                            </div>

                        </div>

                    </div>
                    <hr></hr>
                    <div className="membership">
                        <div className="membership-img-container">
                            <img
                                src="https://uicmensrugby.com/wp-content/uploads/2018/05/UIC-Mens-Rugby-logo-min-1.png"
                                alt="uic-rugby-logo"
                                className="membership-img rugby-img"
                                height="15%"
                                width="15%"
                            />
                        </div>
                        <div className="membership-info-container">
                            <div className="membership-info-title">
                                <h3 >
                                    UIC Men's Rugby Football Club
                                    </h3>
                            </div>
                            <div className="list-container">
                                <ul className="membership-info">
                                    <li>
                                        Competed in the Fall 2017 WIIL conference
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Memberships