import React from "react"
import ReactPlayer from 'react-player';

const Data = [
    {
        id: 1,
        title: 'Glass Locking Lids Food Storage Containers',
        img: '/assets/images/home1.jpg',
        price: "$26.25",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 2,
        title: 'Rectangular Baking Bread Loaf Pan',
        img: '/assets/images/home2.jpg',
        price: "$16.82",
        star: "🌟🌟🌟🌟"

    },
    {
        id: 3,
        title: 'Classic TV Dinner Folding Trays with Storage Rack ',
        img: '/assets/images/home3.jpg',
        price: "$62.20",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 4,
        title: 'Hypoallergenic Quilted Mattress Topper Pad',
        img: '/assets/images/home4.jpg',
        price: "$18.52",
        star: "🌟🌟"

    },
    {
        id: 5,
        title: 'Reversible, Lightweight Microfiber Comforter Blanket',
        img: '/assets/images/home5.jpg',
        price: "$32.99",
        star: "🌟🌟🌟"

    },
    {
        id: 6,
        title: 'Lightweight Super Soft Easy Care Microfiber',
        img: '/assets/images/home6.jpg',
        price: "$22.96",
        star: "🌟🌟🌟🌟"

    },
    {
        id: 7,
        title: 'Room Darkening Blackout Curtain Rod',
        img: '/assets/images/home7.jpg',
        price: "$15.73",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 8,
        title: '1500W Oscillating Ceramic Heater with Adjustable Thermostat',
        img: '/assets/images/home8.webp',
        price: "$26.66",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 9,
        title: ' Speed Small Room Air Circulator Fan',
        img: '/assets/images/home9.jpg',
        price: "$29.99",
        star: "🌟🌟🌟"

    },
    {
        id: 10,
        title: '3 Speed Box Fan, 20-Inch, Black',
        img: '/assets/images/home10.jpg',
        price: "$36.89",
        star: "🌟🌟🌟🌟"

    },
    {
        id: 11,
        title: 'Lift-Top Storage Coffee Table, Natural',
        img: '/assets/images/home11.jpg',
        price: "$168.73",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 12,
        title: 'Silicone Spatula and Cooking Spoon',
        img: '/assets/images/home12.jpg',
        price: "$24.99",
        star: "🌟🌟🌟🌟🌟"

    },



];


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function charmcarthome() {
    const shuffledData = shuffleArray([...Data]);

    return (
        <div>
            <div >
          
            <ReactPlayer
                url="/assets/videos/home.mp4"
                playing={true}
                loop={true}
                controls={false}
                muted={true}
                width="100%"
                height="100%"
            />
        
            </div>
            <div className='posts-container'>
                {shuffledData.map(post => (
                    <div className='post' key={post.id}>
                        <h2 className="posttitle">{post.title}</h2>
                        <img src={post.img} alt={post.title} />
                        <div className="priceandstar">
                            <p>{post.price}</p>
                            <p>{post.star}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}



export default charmcarthome;