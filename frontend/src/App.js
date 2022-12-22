
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/landingPage/LandingPage';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen.js';
import LoginScreen from './screens/LoginScreen/LoginScreen';

function App() {
  return (
    <Router>
    <Header />
    <main>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/mynotes" element={<MyNotes />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/Register" element={<RegisterScreen />} />
      {/* <Route path="/userpage" element={<UserPage />} /> */}
      </Routes>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
