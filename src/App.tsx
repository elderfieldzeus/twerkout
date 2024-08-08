import { Suspense } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import './styles/tailwind.css';
import './styles/input.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback = {<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App;
