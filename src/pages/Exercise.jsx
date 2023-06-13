import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import CreatePost from '../components/CreatePost';
import TextAnimation from '../components/TextAnimation';

function Exercise() {
    const [posts, setPosts] = useState([]);
    const [editing, setEditing] = useState(null);
    const [editedPost, setEditedPost] = useState({});
    const [userRole, setUserRole] = useState('user');
  
    useEffect(() => {
        const role = localStorage.getItem('role');
        if (role) {
          setUserRole(role);
        }
        fetchPosts();
      }, []);
    
      const fetchPosts = async () => {
        try {
          const response = await fetch('http://localhost:5000/exercise');
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };

const handleDelete = async (itemId) => {
    try {
        await fetch(`http://localhost:5000/exercise/${itemId}`, {
            method: 'DELETE',
        });
        fetchPosts();
    } catch (error) {
        console.error('Error deleting post:', error);
    }
};

const handleEdit = async (itemId) => {
    try {
        await fetch(`http://localhost:5000/exercise/${itemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedPost),
        });
        fetchPosts();
        setEditing(null);
    } catch (error) {
        console.error('Error editing post:', error);
    }
};


const startEditing = (post) => {
    setEditing(post._id);
    setEditedPost(post);
}

const handleInputChange = (e) => {
    setEditedPost({ ...editedPost, [e.target.name]: e.target.value });
};

return (
    <div>
        <div>
            <ReactPlayer
                url="/assets/videos/exercise.mp4"
                playing={true}
                loop={true}
                controls={false}
                muted={true}
                width="100%"
                height="100%"
            />
        </div>

        <div>
            <TextAnimation />
            {userRole === 'business' && (
            <CreatePost onNewPost={fetchPosts} />
            )}</div>
       
        <div className="posts-container1">
            {posts.map((post, index) => (
                <div key={index} className="post-card">
                    {editing === post._id && userRole === 'business' ? (
                        <div className="edit-container">
                            <input name="name" value={editedPost.name} onChange={handleInputChange} />
                            <input name="image" value={editedPost.image} onChange={handleInputChange} />
                            <input name="price" value={editedPost.price} onChange={handleInputChange} />
                            <textarea name="description" value={editedPost.description} onChange={handleInputChange} />
                            <button className="edit-button" onClick={() => handleEdit(post._id)}>Save</button>
                            <button className="delete-button" onClick={() => setEditing(null)}>Cancel</button>
                        </div>
                    ) : (
                        <div>
                            <img className="product-image" src={post.image} alt={post.img} />
                            <h2 className="product-name">{post.name}</h2>
                            <h2 className="product-price">${Number(post.price).toFixed(2)}</h2>
                            <p className="product-description">{post.description}</p>
                            {userRole === 'business' && (
    <div className="buttons-container">
        <button className="delete-button" onClick={() => handleDelete(post._id)}>Delete</button>
        <button className="edit-button" onClick={() => startEditing(post)}>Edit</button>
    </div>
)}
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
);
}

export default Exercise;