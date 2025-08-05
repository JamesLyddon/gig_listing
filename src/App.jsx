import { useState } from 'react'
import { gigs as initialGigs } from './data/bandsData'
import Gig from "./components/gig/Gig"
import "./App.css";
import { useAutoAnimate } from '@formkit/auto-animate/react';

function App() {
  const [gigs, setGigs] = useState(initialGigs)

  const [parent] = useAutoAnimate()

  const handleFavouriteToggle = (gigId) => {
    const updatedGigs = gigs.map(gig =>
      gig.id === gigId ? {...gig, isFavourite: !gig.isFavourite} : gig
    )
    updatedGigs.sort((a, b) => +b.isFavourite - +a.isFavourite)

    setGigs(updatedGigs)
  }

  return (
    <div className="gigsContainer" ref={parent}>
      {gigs.map(gig => (
        <Gig gig={gig} key={gig.id} onFavouriteToggle={() => handleFavouriteToggle(gig.id)} />
      ))}
    </div>
  );
}

export default App;
