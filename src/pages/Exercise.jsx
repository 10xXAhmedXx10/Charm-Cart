import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import CreatePost from '../components/CreatePost';

function Exercise() {
  const [posts, setPosts] = useState([]);
  const [postBeingEdited, setPostBeingEdited] = useState(null);


  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://charmcart-backend.onrender.com/exercise');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      await fetch(`https://charmcart-backend.onrender.com/exercise/${itemId}`, {
        method: 'DELETE',
      });
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleEdit = (post) => {
    setPostBeingEdited(post);
  };

  const handleEditSubmit = async (updatedPost) => {
    try {
      await fetch(`https://charmcart-backend.onrender.com/exercise/${postBeingEdited._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
      });
      setPostBeingEdited(null);
      fetchPosts();
    } catch (error) {
      console.error('Error editing post:', error);
    }
  };

  


  return (
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

      {postBeingEdited ? (
      <div className="edit-post">
      <h3>Edit Post</h3>
      <form
        className="edit-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleEditSubmit({
            name: e.target.name.value,
            price: e.target.price.value,
            image: e.target.image.value,
            description: e.target.description.value,
          });
        }}
      >
        <input
          className="edit-input"
          type="text"
          name="name"
          defaultValue={postBeingEdited.name}
        />
        <input
          className="edit-input"
          type="number"
          name="price"
          defaultValue={postBeingEdited.price}
        />
        <input
          className="edit-input"
          type="text"
          name="image"
          defaultValue={postBeingEdited.image}
        />
        <textarea
          className="edit-textarea"
          name="description"
          defaultValue={postBeingEdited.description}
        />
        <button className="save-button" type="submit">
          Save Changes
        </button>
        <button
          className="cancel-button"
          type="button"
          onClick={() => setPostBeingEdited(null)}
        >
          Cancel
        </button>
      </form>
    </div>


      ) : (
        <div>
          <CreatePost onNewPost={fetchPosts} />

          <div className="posts-container">
            {posts.map((post, index) => (
              <div key={index} className="post-card">
                
                <h2 className="product-name">{post.name}</h2>
                
                <img className="product-image" src={post.image} alt={post.image} />
                
                <h2 className="product-price">${Number(post.price).toFixed(2)}</h2>
                <p className="product-description">{post.description}</p>
                <div className="post-actions">
                  <button className="edit-button" onClick={() => handleEdit(post)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(post._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Exercise;
