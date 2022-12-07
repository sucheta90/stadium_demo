
import './App.css';
import MainHeader from './components/Group 41/MainHeader';
import Navigation from './components/Group 173/Navigation';
import Seatstatus from './components/Group 291/Seatstatus';
// import Sidepanel from './components/Calendar/Sidepanel';
import Hero from './components/Group 293/Hero';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Navigation />
      <Seatstatus />
      {/* <Sidepanel /> */}
      <Hero />
    </div>
  );
}

export default App;
