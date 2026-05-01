import cards from "./cardData"
import "./Card.css"
import { Link } from "react-router-dom"

function Card() {
    return (
        <div className="cards">
            <h1 className="cards-heading">
                Services that require mobile number to be registered with Aadhaar
            </h1>
            <div className="card-row">
                {cards.map((card) => (
                    <div className="card-design" key={card.id}>
                        <Link to={card.path} className="link-design">
                            <img src={card.image} alt="" />
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </Link>
                    </div>
                ))}
            </div>

            <p className="belowCard">Mobile not Registered with Aadhaar? <u> Please follow these steps to get it registered.</u></p>

        </div>
    )
}

export default Card