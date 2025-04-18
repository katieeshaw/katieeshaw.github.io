import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;
