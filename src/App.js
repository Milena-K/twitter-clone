import Home from './Home';
import Explore from './Explore';
import Notifications from './Notifications';
import Profile from './Profile';
import { Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  const container = {
    margin: 0,
    height: "100%",
    display: "flex",
    alignItems: "stretch",
  }

  const l_container = {
    background: "lightgreen",
    width: "31%",
    height: "100%",
  }
  const r_container = {
    background: "black",
    width: "69%",
    height: "100%",
  }

  return (
    <div style={container}>
      <div style={l_container}>hi</div>
      <div style={r_container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          {/* Tuka treba da se stavi /$username namesto /profile route */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;

