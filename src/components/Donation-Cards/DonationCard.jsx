// eslint-disable-next-line react/prop-types
const DonationCard = ({ donation }) => {
    // eslint-disable-next-line react/prop-types
    const { picture, category_bg, text, category, title, price } = donation;
    return (
        <div>
            <div style={{ background: category_bg }} className="grid grid-cols-3 rounded-lg">
                <div>
                    <img className="h-full object-cover rounded-s-lg" src={picture} alt="Donation" />
                </div>
                <div className="card-body col-span-2 p-6">
                    <p style={{ background: category_bg, color: text }} className="font-medium max-w-fit px-3 py-1 rounded ">{category}</p>
                    <h2 style={{ color: text }} className="card-title rounded-lg">{
                        title}</h2>
                    <p style={{ color: text }} className="font-medium">{price}</p>
                    <a style={{ background: text }} className="px-4 py-3 max-w-fit text-white rounded font-semibold text-lg">View Details</a>
                </div>
            </div>

        </div>
    );
};

export default DonationCard;