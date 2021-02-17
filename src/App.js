import { useEffect, useRef } from "react";

import "./App.css";

// import images
import marsSurface from "./components/images/mars-surface.svg";
import jetPack from "./components/images/jetpack.svg";
import retroRocket from "./components/images/retro-rocket.svg";
import rover from "./components/images/rover.svg";

// import scripts
import "./components/scripts/landingProcedure";

function App() {
  const retroRocketRef1 = useRef();
  const retroRocketRef2 = useRef();
  const retroRocketRef3 = useRef();
  const retroRocketRef4 = useRef();
  const retroRocketRef5 = useRef();
  const retroRocketRef6 = useRef();
  const retroRocketRef7 = useRef();
  const retroRocketRef8 = useRef();
  useEffect(() => {
    const retroRefs = [
      retroRocketRef1,
      retroRocketRef2,
      retroRocketRef3,
      retroRocketRef4,
      retroRocketRef5,
      retroRocketRef6,
      retroRocketRef7,
      retroRocketRef8,
    ];
    retroRefs.forEach((e) =>
      e.current.classList.add("retro-rocket-descent-fire")
    );
    setTimeout(() => {
      retroRefs.forEach((e) => {
        e.current.classList.remove("retro-rocket-descent-fire");
        e.current.classList.add("retro-rocket-ascent-fire");
      });
    }, 28000);
  }, []);
  return (
    <div className="App">
      <div className="container">
        <img className="mars-surface" src={marsSurface} alt="mars surface" />
        <div className="jetpack" id="jetpack">
          <div className="jetpack-cc">
            <img className="jetpack-body" src={jetPack} alt="mars surface" />
            <img
              className="jetpack-retro-rocket jetpack-retro-rocket-1"
              ref={retroRocketRef1}
              src={retroRocket}
              alt="retro rocket"
            />
            <img
              className="jetpack-retro-rocket jetpack-retro-rocket-2"
              ref={retroRocketRef2}
              src={retroRocket}
              alt="retro rocket"
            />
            <img
              className="jetpack-retro-rocket jetpack-retro-rocket-3"
              ref={retroRocketRef3}
              src={retroRocket}
              alt="retro rocket"
            />
            <img
              className="jetpack-retro-rocket jetpack-retro-rocket-4"
              ref={retroRocketRef4}
              src={retroRocket}
              alt="retro rocket"
            />
            <img
              className="jetpack-retro-rocket jetpack-retro-rocket-5"
              ref={retroRocketRef5}
              src={retroRocket}
              alt="retro rocket"
            />
            <img
              className="jetpack-retro-rocket jetpack-retro-rocket-6"
              ref={retroRocketRef6}
              src={retroRocket}
              alt="retro rocket"
            />
            <img
              className="jetpack-retro-rocket jetpack-retro-rocket-7"
              ref={retroRocketRef7}
              src={retroRocket}
              alt="retro rocket"
            />
            <img
              className="jetpack-retro-rocket jetpack-retro-rocket-8"
              ref={retroRocketRef8}
              src={retroRocket}
              alt="retro rocket"
            />
          </div>
          <div className="harness harness-1"></div>
          <div className="harness harness-2"></div>
          <div className="harness harness-3"></div>
        </div>
        <div className="rover">
          <img className="rover-image" src={rover} alt="rover" />
        </div>
      </div>
    </div>
  );
}

export default App;
