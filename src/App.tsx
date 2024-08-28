import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/tailwind.css";
import "./styles/input.css";
import Landing from "./pages/Landing";
import Workout from "./pages/Workout";
import Split from "./pages/Split";
import CurrentSplit from "./pages/Split/CurrentSplit";
import Progress from "./pages/Progress";
import Notes from "./pages/Notes";
import Profile from "./pages/Profile";
import NewSplit from "./pages/Split/NewSplit";
import Begin from "./pages/Workout/Begin";

function App() {
  const [white, setWhite] = useState<boolean>(true);

  useEffect(() => {
    document.body.style.backgroundColor = white ? "white" : "#facc15";
  }, [white]);

  const setToWhite = (): void => {
    setWhite(true);
  };

  const setToYellow = (): void => {
    setWhite(false);
  };

  return (
    <div className="bg-yellow-400">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Landing setColor={setToYellow} />} />
            <Route path="/gym" element={<Workout setColor={setToWhite} />} />
            <Route path="/gym/begin" element={<Begin setColor={setToWhite} />} />
            <Route path="/split" element={<Split setColor={setToWhite} />} />
            <Route
              path="/split/current"
              element={<CurrentSplit setColor={setToWhite} />}
            />
            <Route
              path="/split/new"
              element={<NewSplit setColor={setToWhite} />}
            />
            <Route
              path="/progress"
              element={<Progress setColor={setToWhite} />}
            />
            <Route path="/notes" element={<Notes setColor={setToWhite} />} />
            <Route
              path="/profile"
              element={<Profile setColor={setToWhite} />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
