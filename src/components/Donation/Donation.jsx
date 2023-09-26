import { useLoaderData } from "react-router-dom";
import DonationCard from "../Donation-Cards/DonationCard";
import { useEffect, useState } from "react";
import { getStored } from "../../utility/localStorage";

const Donation = () => {
    const donation = useLoaderData();
    const [pastDonation, setpastDonation] = useState([])
    useEffect(() => {
        const pastDonationId = getStored()

        const past = donation.filter(donation => pastDonationId.includes(donation.id));
        setpastDonation(past)

    }, [])
    console.log(pastDonation)
    return (
        <div className="max-w-6xl mx-auto pb- pt-10">
            <div className="grid grid-cols-2 gap-6">
                {
                    pastDonation.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Donation;