import "./Gig.css"

const Gig = ({band}) => {
    const {name, description, location, time, img} = band
    // set image as background for card
    const cardStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${img})`
    };

    return (
        <div className="card" style={cardStyle}>

                <h3 className="bandName">{name}</h3>
                <p className="bandDescription" >{description}</p>
                <p className="gigTime">{time}</p>
                <p className="gigLocation">{location}</p>

        </div>
    )
}

export default Gig