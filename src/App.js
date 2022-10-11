import Home from './Home';
import Explore from './Explore';
import Notifications from './Notifications';
import Profile from './Profile';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';


function App() {
  return (
    <div className='container'>
      <div className='lContainer'>hi</div>
      <div className='cContainer'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          {/* Tuka treba da se stavi /$username namesto /profile route */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <div className='rContainer'>
        hi
      </div>
    </div>
  )
}

export default App;

