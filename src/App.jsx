import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './index.css'
import LayoutForm from './components/LayoutForm';
import { Home } from './components/Home';
import { EditProfile } from './components/EditProfile';
import { AploadPost } from './components/AploadPost';

function App() {
  return (
    <div className='lg:bg-dark'>
      <Router>
        <Routes>
          <Route path='/' element={<LayoutForm/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/editProfile' element={<EditProfile />}/>
          <Route path='/aploadPost' element={<AploadPost />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;