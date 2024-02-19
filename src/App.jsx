import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './index.css'
import Layout from './components/layout';
import { Profile } from './components/Profile';

function App() {
  return (
    <div className='lg:bg-dark'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;