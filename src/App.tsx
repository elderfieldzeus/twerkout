import { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import './styles/tailwind.css';
import './styles/input.css';
import Gym from './pages/Gym';
import Header from './components/Header';

function App() {
  const [white, setWhite] = useState<boolean>(true);

  const setToWhite = (): void => {
    setWhite(true);
  }

  const setToYellow = (): void => {
    setWhite(false);
  }

  return (
    <>
    <Header white = {white}/>
    <div className='bg-yellow-400'>
      <BrowserRouter>
        <Suspense fallback = {<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home setColor = {setToYellow}/>}/>
            <Route path='/gym' element={<Gym setColor = {setToWhite}/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App;
