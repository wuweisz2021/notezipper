import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
//import CreateNote from "./screens/SingleNote/CreateNote";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/mynotes" element={<MyNotes />} />

    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
