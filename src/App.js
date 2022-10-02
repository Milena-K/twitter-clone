import Home from './Home';
import Explore from './Explore';
import Notifications from './Notifications';
import Profile from './Profile';
import { Route, Routes } from 'react-router-dom';


function App() {
  const style_container = {
    margin: 0,
    height: "100%",
    display: "flex",
    alignItems: "stretch",
  }

  const style_l_container = {
    background: "green",
    width: "31%",
  }
  const style_r_container = {
    background: "yellow",
    width: "69%",
  }

  return (
    <div style={style_container}>
      <div style={style_l_container}>hi</div>
      <div style={style_r_container}>
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

