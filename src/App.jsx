import { gigs } from './data/bandsData'
import Gig from "./components/gig/Gig"
import "./App.css";

function App() {
  return (
    <div className="gigsContainer">
      {gigs.map(gig => (
        <Gig band={gig} key={gig.id} />
      ))}
    </div>
  );
}

export default App;
