import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import CreatePost from '../components/CreatePost';

function Gym() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:5000/gym');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <div>
                <ReactPlayer
                    url="/assets/videos/gym.mp4"
                    playing={true}
                    loop={true}
                    controls={false}
                    muted={true}
                    width="100%"
                    height="100%"
                />
            </div>
            <CreatePost />
            <div>
                {posts.map((post, index) => (
                    <div key={index}>
                        <img src={post.image} alt={post.name} />
                        <h2>{post.name}</h2>
                        <p>{post.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gym;
