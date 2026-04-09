import { useState } from "react";
import Loader from "./components/Loader";


import Hero from "./components/Hero";
import Story from "./components/Story";
import Events from "./components/Events";
// import Timer from "./components/Countdown";
// import Gallery from "./components/Gallery";
// import RSVP from "./components/RSVP";
// import Location from "./components/Location";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered ? (
        <Loader onEnter={() => setEntered(true)} />
      ) : (
        <>
      
        <Hero />
          <Story />
          <Events />
          {/* <Timer /> */}
          {/* <Gallery /> */}
          {/* <RSVP /> */}
          {/* <Location /> */}
        </>
      )}
    </>
  );
}

export default App;