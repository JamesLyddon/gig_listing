
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons'
import "./Gig.css"

const Gig = ({gig, onFavouriteToggle}) => {
    const {name, description, location, time, img, isFavourite} = gig

    const cardStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${img})`
    };

    let btnIcon = isFavourite ? <FontAwesomeIcon icon={fullHeart} /> : <FontAwesomeIcon icon={emptyHeart} />

    const handleFavClick = (event) => {
        onFavouriteToggle()        
        
        const button = event.currentTarget;
        button.classList.add('animate');
        setTimeout(() => {
            button.classList.remove('animate');
        }, 400);
    };

    return (
        <div className="card" style={cardStyle}>
                <div className="titleContainer">
                    <span className="bandName">{name}</span>
                    <button className="favButton" onClick={handleFavClick}>{btnIcon}</button>
                </div>
                <p className="bandDescription" >{description}</p>
                <div className="gigDetails">
                    <p className="gigLocation">{location}</p>
                    <p className="gigTime">{time}</p>
                </div>
        </div>
    )
}

export default Gig