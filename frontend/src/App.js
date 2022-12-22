import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import SingleNote from "./screens/SingleNote/SingleNote";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/SingleNote/CreateNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={(s) => setSearch(s)} />
      
      <main className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/mynotes" element={({ history }) => (<MyNotes search={search} history={history} />)}/>
        <Route path="/note/:id" element={<SingleNote />} />
        <Route path="/createnote" element={<CreateNote />} />;
        <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </main>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
