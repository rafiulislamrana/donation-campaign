import { useLoaderData } from "react-router-dom";
import DonationCard from "../Donation-Cards/DonationCard";
import { useEffect, useState } from "react";
import { getStored } from "../../utility/localStorage";

const Donation = () => {
    const donation = useLoaderData();
    const [pastDonation, setpastDonation] = useState([])
    const [length, setLength] = useState(4);
    const [state, setState] = useState("hidden");
    const [nue, setNue] = useState("");
    const [isHidden, setisHidden] = useState(false)
    useEffect(() => {
        const pastDonationId = getStored()

        const past = donation.filter(donation => pastDonationId.includes(donation.id));
        setpastDonation(past);
        
        const bla = pastDonation.length < 5 ? true : false;
        setisHidden(bla)
    }, [pastDonation]);

  


    const showAll = () => {
        setNue("hidden");
        setLength(pastDonation.length);

    }

    



    return (
        <div className="max-w-6xl mx-auto pb-10 md:pt-10 px-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                {
                    pastDonation.slice(0, length).map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>
            <div className={isHidden ? state : nue}>
                {

                }
                <a onClick={showAll} className="mt-2 px-4 py-3 max-w-fit bg-[#009444] text-white rounded font-semibold text-lg block mx-auto cursor-pointer">View Details</a>
            </div>
        </div>
    );
};

export default Donation;