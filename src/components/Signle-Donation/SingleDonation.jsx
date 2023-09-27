import { Link, useLoaderData, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import {getStored, donated} from "../../utility/localStorage"

const SingleDonation = () => {
    const allDonation = useLoaderData();
    const { id } = useParams();
    const integerId = parseInt(id)

    const donation = allDonation.find(i => i.id == id)

    const donationClick = () => {
        donated(integerId);
        toast("You have successfully donated") 
    }
    return (
        <div className="max-w-6xl mx-auto pb-10 px-3">
            <div className="relative">
                <div className="bg-[#0B0B0B80] w-full bottom-0 rounded-b-lg absolute py-10 pl-10 z-[1]">
                    <Link style={{ background: donation.text }} className="px-6 py-4 z-[2] rounded text-white font-semibold text-xl" onClick={donationClick}>Donate {donation.price}</Link>
                </div>

                <img className="w-full h-[350px] lg:h-[550px] object-cover rounded-lg" src={donation.picture} alt="" />

            </div>
            <div>
                <h2 className="pt-14 text-4xl font-bold">{donation.title}</h2>
                <p className="pt-6">{donation.description}</p>
            </div>
        </div>
    );
};

export default SingleDonation;