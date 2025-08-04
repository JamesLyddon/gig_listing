import Gig from "./components/gig/Gig"
import "./App.css";

function App() {
  const band = {
  name: "Bearsuit",
  img: "https://images.ukfestivalguides.com/artist_images/bearsuit.jpg",
  description: "Bearsuit are an English art-rock/indie pop band from Norwich, England, active from 2001",
  time: "8pm, 20th of September",
  location: "The Water Rats, 328 Grays Inn Road, Kings Cross, WC1X 8BZ"
  }

  return (
    <>
      <Gig band={band} />
    </>
  );
}

export default App;
