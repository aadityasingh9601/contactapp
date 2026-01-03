import "./App.css";
import Home from "./components/Home";
import ContactForm from "./components/ContactForm";
import Contacts from "./components/Contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/newcontact" element={<ContactForm />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
