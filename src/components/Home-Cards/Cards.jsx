import { Link } from "react-router-dom";

const Cards = (card) => {
    const {id, picture, title, category, category_bg, card_bg, text } = card.card;

   

    return (
        <Link to={`/donation/${id}`}>
            <div style={{ background: card_bg }} className="card card-compact rounded-lg">
                <img src={picture} alt="Donation" />
                <div className="card-body">
                    <p style={{ background: category_bg, color: text }} className="font-medium max-w-fit px-3 py-1 rounded">{category}</p>
                    <h2 style={{ color: text }} className="card-title rounded-lg">{
                        title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Cards;

