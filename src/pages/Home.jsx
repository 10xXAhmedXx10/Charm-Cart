import React from "react"


const Data = [
    {
        id: 1,
        title: 'Apple iPhone XR, 64GB (Renewed)',
        img: '/assets/images/preview1.jpeg',
        price: "$244",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 2,
        title: 'TERRO T300B Liquid Ant Killer',
        img: '/assets/images/preview2.jpg',
        price: "$13.76",
        star: "🌟🌟🌟🌟"

    },
    {
        id: 3,
        title: 'Utopia Bedding Throw Pillows',
        img: '/assets/images/preview3.jpg',
        price: "$13.59",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 4,
        title: 'Flexzilla Garden Hose',
        img: '/assets/images/preview4.jpg',
        price: "$41.59",
        star: "🌟🌟"

    },
    {
        id: 5,
        title: 'Hontry Binoculars for Adults and Kids',
        img: '/assets/images/preview5.jpg',
        price: "$29.75",
        star: "🌟🌟🌟"

    },
    {
        id: 6,
        title: 'Gskyer Telescope',
        img: '/assets/images/preview6.jpg',
        price: "$99.99",
        star: "🌟🌟🌟🌟"

    },
    {
        id: 7,
        title: 'PowerA FUSION Pro 3 Wired Controller ',
        img: '/assets/images/preview7.jpg',
        price: "$79.99",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 8,
        title: 'Le Specs Womens Paramount Sunglasses',
        img: '/assets/images/preview8.jpg',
        price: "$50",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 9,
        title: 'BONAOK Wireless Karaoke Microphone',
        img: '/assets/images/preview9.jpg',
        price: "$29.99",
        star: "🌟🌟🌟"

    },
    {
        id: 10,
        title: 'Apple Watch Series 8',
        img: '/assets/images/preview10.jpg',
        price: "$359",
        star: "🌟🌟🌟🌟"

    },
    {
        id: 11,
        title: 'Kinetic Sand',
        img: '/assets/images/preview11.jpg',
        price: "$19.49",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 12,
        title: 'Imagimake 5-in-1 Awesome Craft Kit',
        img: '/assets/images/preview12.jpg',
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


function homePage() {
    const shuffledData = shuffleArray([...Data]);

    return (
        <div>
            <div className="home-video-container">
                <video src="assets/videos/homepagebackground.mp4" autoPlay muted loop></video>
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



export default homePage;