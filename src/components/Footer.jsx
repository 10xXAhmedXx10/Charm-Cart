import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <div className="row">
                    <div className="website">
                        <h3>Website</h3>
                        <ul>
                            <li><a href="/About">About</a></li>
                            <li><a href="/Thestory">The Story</a></li>
                        </ul>
                    </div>
                    <div className="support">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className="social">
                        <h3>Social</h3>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/ahmed-swe/">
                                <img className='sociallink' src="/assets/images/linkedin.png" alt="LinkedIn logo" />
                            </a>
                            <a href="https://github.com/10xXAhmedXx10">
                                <img className='sociallink' src="/assets/images/github.png" alt="Github logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
