import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home1 } from './pages/Home1'

function App() {

  return (
      <Routes>
        <Route index element={<Home1 />} />
      </Routes>
  )
}

export default App;
