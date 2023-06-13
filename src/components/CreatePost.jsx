import React, { useState } from 'react';

const CreatePost = ({ onNewPost }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:10000/exercise', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, price, image, description }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log(data);
            handleClose();
            onNewPost();
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    

    return (
        <div className='create-post-div'>
            <button className='create-post-button' onClick={handleOpen}>sell item</button>
            {isOpen && (
                <div className="modal">
                    <form className='create-post-form' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

<input
    type="number"
   
    placeholder="Price"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
/>


                        <input
                            type="text"
                            placeholder="Image URL"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />

                        <textarea
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <button className='add-item' type="submit">post</button>
                        <button className='cancel-button' type="button" onClick={handleClose}>cancel</button>
                    </form>
                    
                        
                </div>
            )}
            
        </div>
    );
};

export default CreatePost;
