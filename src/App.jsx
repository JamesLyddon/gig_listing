import { bands } from './data/bandsData'
import Gig from "./components/gig/Gig"
import "./App.css";

function App() {
  return (
    <div className="gigsContainer">
      <Gig band={bands.bearsuit} />
      <Gig band={bands.theSonicManipulator} />
      <Gig band={bands.TWRP} />
      <Gig band={bands.gojira} />
    </div>
  );
}

export default App;
