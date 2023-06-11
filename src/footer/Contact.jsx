import React from "react";

function Contact() {
    return (
        <div className="contact-page">
            <div className="contact-content">
                <p>
                For any inquiry, bug, suggestion, or anything else:
                </p>
                <p>
                    Please find my information below.
                </p>
                <p>
                   <span style={{color:"gold"}}>My name : Ahmed Alsalihi</span>
                </p>
                <p>Email address: <h2>Ahmed.salihi9610@gmail.com</h2>
                <h3>or click the Email icon</h3></p>
                <p>
                    
                    <a href="mailto:Ahmed.salihi9610@gmail.com">
                        <img src="/assets/images/gmail.png" alt="Email" style={{ height: '30px', width: '30px' }}
 />
                    </a>
                </p>
                <p>Also, you can find me on:</p>
                <br />
                <p> <a href="https://www.linkedin.com/in/ahmed-swe/">
                            <img className='sociallink' src="/assets/images/linkedin.png" alt="LinkedIn logo" />
                        </a></p>
                        <p>  <a href="https://github.com/10xXAhmedXx10">
                            <img className='sociallink' src="/assets/images/github.png" alt="Github logo" />
                        </a></p>
                        <p>Thank you so much for visiting the website 
                
                
                        </p>
            <p>and I hope you have a wonderful day!</p>
            <p><img src="../assets/images/Forvisiting.png" height={"250px"} alt="thankyou" /></p>
            </div>
        </div>
    );
}

export default Contact;
