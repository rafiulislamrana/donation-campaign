import { useEffect, useState } from "react";
import Cards from "../Home-Cards/Cards";



const Home = () => {

    const [donation, setDonation] = useState([])

    useEffect(() => {
        fetch('../../../public/donation-details.json')
            .then(res => res.json())
            .then(data => setDonation(data))
    }, [])

    return (
        <div>
            {/* Banner Section */}
            <div>
                <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/0fq71Tx/Rectangle-4281.png)' }}>
                    <div className="hero-overlay bg-white bg-opacity-90 bg-cover"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="py-32">
                            <h1 className="mb-5 text-5xl text-[#0B0B0B] font-bold">I Grow By Helping People In Need</h1>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* All card section */}
            <div className="grid grid-cols-4 gap-6 py-20 max-w-6xl mx-auto">
                {
                    donation.map(card => <Cards key={card.id} card={card}></Cards>)
                }
            </div>

            

        </div>
    );
};

export default Home;