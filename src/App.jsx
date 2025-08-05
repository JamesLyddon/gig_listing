import Gig from "./components/gig/Gig"
import "./App.css";

function App() {
  const bands = {
    bearsuit: {
    name: "Bearsuit",
    img: "https://images.ukfestivalguides.com/artist_images/bearsuit.jpg",
    description: "Bearsuit are an English art-rock/indie pop band from Norwich, England, active from 2001",
    time: "8pm, 20th of September, 2025",
    location: "The Water Rats, 328 Grays Inn Road, Kings Cross, WC1X 8BZ"
  }, 
    theSonicManipulator: {
    name: "The Sonic Manipulator",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ4tXrA0dbrwuYng17JB0d7dTjdt8mYJSoNA&s",
    description: "Greetings Earthlings, I have had many interesting adventures on my way to becoming a spaceman, such is the nature of the convolutions of life.",
    time: "5pm, 11th of November, 2025",
    location: "Sydney Opera House, Bennelong Point, Sydney NSW 2000, Australia"
  }, 
}

  return (
    <>
      <Gig band={bands.bearsuit} />
      <Gig band={bands.theSonicManipulator} />
    </>
  );
}

export default App;
