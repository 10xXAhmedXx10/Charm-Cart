import React from "react";


function TheStoryPage() {
    return (
        <div className="story-pages">
            <div className="story-content">
                <p>
                    CharmCart was created as a capstone project at <span style={{color:"red"}}>General Assembly.</span> The goal was to prove my skills with the technologies and concepts I'd learned during the course. The idea behind CharmCart is to provide a seamless shopping experience for users by allowing them to browse through a wide variety of products, create posts, and participate in a community-driven platform.
                </p>
                <p>
                    CharmCart is built using the MERN stack, which stands for MongoDB, Express, React, and Node.js. This combination allows for a robust and scalable web application. MongoDB was used for its flexible schema design, Express to handle HTTP requests and routing, React for building user interfaces, and Node.js as the runtime environment.
                </p>
                <p>
                    One of the key features of CharmCart is its user-friendly interface, which streamlines the shopping experience. Users can easily create an account, browse through the products, and add them to their cart.
                </p>
                <p>
                    To ensure data integrity and security, CharmCart implements best practices such as hashing passwords before storing them and using tokens for authentication.
                </p>
                <p>
                    In conclusion, CharmCart showcases the skills acquired during the <span style={{color:"red"}}>General Assembly's</span> course and reflects an understanding of how various technologies can be integrated to create a dynamic, user-focused online shopping platform.
                </p>
            </div>
        </div>
    )
}

export default TheStoryPage;
