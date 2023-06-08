import React from "react";
import ReactPlayer from 'react-player';


function About() {
    return (

        <div className="about-container">
        <div className="slideshow1">
            <ReactPlayer
                url="/assets/videos/test.mp4"
                playing={true}
                loop={true}
                controls={false}
                muted={true}
                width="100%"
                height="100%"
            />
        </div>

        <div className="about-video-background">
        <ReactPlayer
          url="/assets/videos/aboutpagebackgroundvideo.mp4"
          playing={true}
          loop={true}
          controls={false}
          muted={true}
          width="100%"
          height="100%"
        />

        <div className="aboutpage">
            <div className="aboutdescrption">
                <p>
                    <span style={{ color: "#8B1874" }}> Browsing Experience: </span>
                    <br />
                    <br />
                    CharmCart offers a visually appealing interface where users can browse through an extensive collection of items. The items displayed are for demonstration purposes and represent the range of products that could be available in an actual online store.
                </p>

                <p>
                    <span style={{ color: "#8B1874" }}> Business Account: </span>
                    <br />
                    <br />
                    For those looking to experience the seller's perspective, CharmCart allows users to register as business accounts. Business account holders have the capability to add, delete, or edit posts within the website, simulating the management of an online storefront.</p>

                <p>
                    <span style={{ color: "#8B1874" }}> User Registration: </span>
                    <br />
                    <br />
                    Users can also register accounts to personalize their browsing experience and engage with the various features CharmCart offers like the ability to add items to their cart or delete them from the cart.
                </p>

                <p>
                    <span style={{ color: "#8B1874" }}> Browser Games: </span>
                    <br />
                    <br />
                    In a twist on the conventional e-commerce experience, CharmCart provides users with the option to play browser-based games. This adds an element of fun and entertainment, enhancing user engagement.
                    </p>
                <p>
                    <span style={{ color: "#8B1874" }}> Achievement and Learning Experience: </span>
                    <br />
                    <br />
                    CharmCart is a testament to the hard work, dedication, and knowledge gained during the six-month tenure at <span style={{color: "red" }}> General Assembly. </span> It reflects the application of classroom teachings as well as self-acquired skills. The developer takes immense pride in the successful completion of this project and hopes that visitors find joy and inspiration in browsing through CharmCart’s diverse offerings.

                </p>
            </div>
        </div>
        </div>
        </div>
    );
}



export default About;