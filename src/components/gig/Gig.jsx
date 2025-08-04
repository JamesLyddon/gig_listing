import "./Gig.css"

const Gig = (props) => {
    // set image as background for card
    const cardStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${props.band.img})`
    };

    return (
        <div className="card" style={cardStyle}>
            <h3 className="bandName">{props.band.name}</h3>
            <p className="bandDescription" >{props.band.description}</p>
            <p className="gigLocation">{props.band.location}</p>
            <p className="gigTime">{props.band.time}</p>
        </div>
    )
}

export default Gig