import React from "react"
import ReactPlayer from 'react-player';

const Data = [
    {
        id: 1,
        title: 'Eycuro Womens Linen Pants Summer Casual Drawstring ',
        img: '/assets/images/wf1.jpg',
        price: "$16.99",
    
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 2,
        title: 'AUTOMET Womens Summer 2 Piece Outfits Linen Crop Tank Top',
        img: '/assets/images/wf2.jpg',
        price: "$38.99",
        star: "🌟🌟🌟🌟"

    },
    {
        id: 3,
        title: 'AUTOMET Womens 2 Piece Outfits Lounge Matching Sets Two Piece',
        img: '/assets/images/wf3.jpg',
        price: "$36.99",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 4,
        title: 'Dokotoo Womens Blouses and Tops Short Sleeve Chiffon Shirts and Tops',
        img: '/assets/images/wf4.jpg',
        price: "$24.64",
        star: "🌟🌟"

    },
    {
        id: 5,
        title: 'Ninedaily Womens Sleeve Plaid Shirts Zip Floral Casual Tunic Blouse Tops',
        img: '/assets/images/wf5.jpg',
        price: "$31.99",
        star: "🌟🌟🌟"

    },
    {
        id: 6,
        title: 'miduo Womens Tops Square Neck Polka Dot Balloon Long Sleeve Top Shirts',
        img: '/assets/images/wf6.jpg',
        price: "$21.24",
        star: "🌟🌟🌟🌟"

    },
    {
        id: 7,
        title: 'WEESO Summer V Neck Shirts for Women Puffy Short Sleeves Blouses',
        img: '/assets/images/wf7.jpg',
        price: "$24.99",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 8,
        title: 'Dokotoo Womens Patchwork Destroyed Raw Hem Jeans Ripped Hole Boyfriend Denim Pants',
        img: '/assets/images/wf8.jpg',
        price: "$36.88",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 9,
        title: 'ETCYY Sleeveless Tank Tops for Women Summer Tops V Neck Tie Dye Cute Printed Loose Fit Workout Yoga Shirt',
        img: '/assets/images/wf9.jpg',
        price: "$17.99",
        star: "🌟🌟🌟"

    },
    {
        id: 10,
        title: 'Grlasen Womens Zipper Summer Pleated Button Short Sleeve T-Shirt Summer V-Neck Solid Color Casual top',
        img: '/assets/images/wf10.jpg',
        price: "$24.98",
        star: "🌟🌟🌟🌟"

    },
    {
        id: 11,
        title: 'AMEBELLE Womens Sleeveless Cotton Linen Overalls Rompers Baggy Wide Leg Jumpsuits',
        img: '/assets/images/wf11.jpg',
        price: "$25.99",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 12,
        title: 'Ceboyel Women Floral Spaghetti Strap Sundress Casual Summer Long Maxi Dress Vneck Sexy Boho Dresses Trendy Beach Clothes 2023',
        img: '/assets/images/wf12.jpg',
        price: "$36.00",
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


function WomenFashion() {
    const shuffledData = shuffleArray([...Data]);

    return (
        <div>
            <div >
          
            <ReactPlayer
                url="/assets/videos/wf.mp4"
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



export default WomenFashion;