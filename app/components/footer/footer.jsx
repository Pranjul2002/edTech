import React from 'react'
import Link from 'next/link'

import './footerStyle.css'

const footer = () => {
  return (
    <div id='footer'>
        <div className="footerArea">
            <div className="footerAreaWraper">
                <div className="container">
                    <div className="footerColumn">
                        <div className="footerAboutUs">
                            <div className="logo"><h1>EdTech</h1></div>
                            <div className="footerAboutUsPara">
                                Build your network, share skills, <br />
                                and open up on the Learning <br />
                                platform where you can be your <br />
                                whole self Forward Arrow
                            </div>
                        </div>
                        <div className="socialMediaBlock"></div>
                    </div>
                </div>
                <div className="copywriteContent">
                    <div className="copywriteText">
                        Copyright © 2022 Musemind <Link href="/">ui/ux design</Link> agency | All rights reserved.
                    </div>
                    <div className="copywriteMenu">
                        <ul>
                            <li>Terms of Service</li>
                            <li>Privacy & Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer