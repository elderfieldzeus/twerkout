import { Suspense } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import './styles/tailwind.css';
import './styles/input.css';
import Gym from './pages/Gym';

function App() {
  return (
    <div className='bg-yellow-400'>
      <BrowserRouter>
        <Suspense fallback = {<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/gym' element={<Gym />}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App;
