import { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/tailwind.css';
import './styles/input.css';
import Landing from './pages/Landing';
import Gym from './pages/Gym';
import Split from './pages/Split';
import Progress from './pages/Progress';
import Notes from './pages/Notes';
import Profile from './pages/Profile';


function App() {
  const [white, setWhite] = useState<boolean>(true);

  useEffect(() => {
    document.body.style.backgroundColor = white ? 'true' : '#facc15';
  }, [white]);

  const setToWhite = (): void => {
    setWhite(true);
  }

  const setToYellow = (): void => {
    setWhite(false);
  }

  return (
    <div className='bg-yellow-400'>
      <BrowserRouter>
        <Suspense fallback = {<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Landing setColor = {setToYellow}/>}/>
            <Route path='/gym' element={<Gym setColor = {setToWhite}/>}/>
            <Route path='/split' element={<Split setColor = {setToWhite}/>}/>
            <Route path='/progress' element={<Progress setColor = {setToWhite}/>}/>
            <Route path='/notes' element={<Notes setColor = {setToWhite}/>}/>
            <Route path='/profile' element={<Profile setColor = {setToWhite}/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App;
