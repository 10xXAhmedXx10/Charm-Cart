import React from "react"
import ReactPlayer from 'react-player';

const Data = [
    {
        id: 1,
        title: 'Pet Honesty Senior Hemp Mobility',
        img: '/assets/images/pets1.jpg',
        price: "$33.99",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 2,
        title: 'Wisdom Panel Premium',
        img: '/assets/images/pets2.jpg',
        price: "$127.99",
        star: "🌟🌟🌟🌟"

    },
    {
        id: 3,
        title: 'PetHonesty Multivitamin Max Strength Supplement',
        img: '/assets/images/pets3.jpg',
        price: "$33.99",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 4,
        title: 'Afloia Dog Grooming Kit, Pet Grooming Vacuum ',
        img: '/assets/images/pets4.jpg',
        price: "$149.99",
        star: "🌟🌟"

    },
    {
        id: 5,
        title: 'Chihuahua Charm Necklace, Dog Pet Lover Gift',
        img: '/assets/images/pets5.jpg',
        price: "$14.95",
        star: "🌟🌟🌟"

    },
    {
        id: 6,
        title: 'dog bathrobe,dog bath towel,dog robes for after bath,dog shower bath supplies',
        img: '/assets/images/pets6.jpg',
        price: "$15.99",
        star: "🌟🌟🌟🌟"

    },
    {
        id: 7,
        title: '4 FT Dog Leash Handmade Braided Cotton Rope Dog Leash',
        img: '/assets/images/pets7.jpg',
        price: "$18.99",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 8,
        title: 'oneisall Dog Shaver Clippers Low Noise Rechargeable',
        img: '/assets/images/pets8.jpg',
        price: "$27.05",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 9,
        title: 'ATESON Dog Grooming Hammock - Upgrade Pet Grooming Harness for Nail Trimming (L 50lb)',
        img: '/assets/images/pets9.jpg',
        price: "$26.99",
        star: "🌟🌟🌟"

    },
    {
        id: 10,
        title: 'Wisdom Panel Complete: Comprehensive Cat DNA Test for 45 Health Genetic Health Conditions',
        img: '/assets/images/pets10.jpg',
        price: "$103.99",
        star: "🌟🌟🌟🌟"

    },
    {
        id: 11,
        title: 'Pet Honesty Super Pooper Max Strength Chews - Digestion & Health Supplement for Dogs',
        img: '/assets/images/pets11.jpg',
        price: "$33.99",
        star: "🌟🌟🌟🌟🌟"

    },
    {
        id: 12,
        title: 'Matching Dog and Owner Sweaters Human Christmas Pajamas Pjs For Family Pet Sets ',
        img: '/assets/images/pets12.jpg',
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


function Pets() {
    const shuffledData = shuffleArray([...Data]);

    return (
        <div>
            <div >
          
            <ReactPlayer
                url="/assets/videos/pets.mp4"
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



export default Pets;