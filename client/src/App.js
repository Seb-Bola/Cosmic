import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import Home from "./components/Home";
import Contact from "./Forms/Contact";
import Admin from "./Admin/Admin";
import Alien from "./components/Alien";
import styled from "styled-components";
import Header from "./NavBarElements/Header";
import Signin from "./components/Signin";
import Terms from "./NavBarElements/TermAndConditions";
import Lineup from "./NavBarElements/Lineup";
import FormDetails from "./Admin/FormDetails";
import Footer from "./components/Footer";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { user } = useAuth0();
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Page>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adminKeyLogIn" element={<Signin />} />
          <Route path="/alien" element={<Alien />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/lineup" element={<Lineup />} />
          {user && <Route path="/adminpage" element={<Admin />} />}
          {user && <Route path="/adminpage/:_id" element={<FormDetails />} />}
        </Routes>
        <Footer />
      </Page>
    </BrowserRouter>
  );
};

export default App;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  height: max-content;
  background: white;
  color: black;
`;
