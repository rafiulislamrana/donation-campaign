import { useEffect, useState } from "react";
import Cards from "../Home-Cards/Cards";




const Home = () => {

    const [donation, setDonation] = useState([]);
    const [input, setInput] = useState("");
    const [repDonation, setrepDonation] = useState([]);
    

    useEffect(() => {
        fetch('../../../public/donation-details.json')
            .then(res => res.json())
            .then(data =>  {setDonation(data); setrepDonation(data);})
    }, [])
    

    
    
    const inputData = (e) => {
        let string = e.target.value;
        setInput(string[0].toUpperCase() +
            string.slice(1));
    }
  

    const handleSearch = () => {
        
        const filteredDonation = donation.filter(name => name.category == input);
        setrepDonation(filteredDonation)
    }

    console.log(repDonation)
    return (
        <div>
            {/* Banner Section */}
            <div>
                <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/0fq71Tx/Rectangle-4281.png)' }}>
                    <div className="hero-overlay bg-white bg-opacity-90 bg-cover"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="py-32 flex items-center gap-4 flex-col">
                            <h1 className="mb-5 text-5xl text-[#0B0B0B] font-bold">I Grow By Helping People In Need</h1>
                            {/* <input type="text" />
                            <button className="btn btn-primary">Search</button> */}
                            <div className="form-control">
                                <div className="input-group">
                                    <input onChange={inputData} type="text" placeholder="Search…" className="input input-bordered text-black" />
                                    <button onClick={handleSearch} className="btn text-white bg-[#FF444A] hover:bg-black">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* All card section */}
            <div className="grid grid-cols-4 gap-6 py-20 max-w-6xl mx-auto">
                {
                    repDonation.map(card => <Cards key={card.id} card={card}></Cards>)
                }
            </div>



        </div>
    );
};

export default Home;