import styled from "styled-components";
import { useNavigate, NavLink } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaSoundcloud } from "react-icons/fa";

const Footer = () => {
  const scrollTop = (event) => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <Baseline>
      <FooterInfo>
        <div>
          <ul>
            <FooterListItems>
              <NavLink to="https://www.facebook.com/CosmicNRGFestival">
                <BsFacebook />
                FACEBOOK
              </NavLink>
            </FooterListItems>
            <FooterListItems>
              <NavLink to="https://www.instagram.com/cosmic.nrg.festival/">
                <BsInstagram />
                INSTAGRAM
              </NavLink>
            </FooterListItems>
            <FooterListItems>
              <NavLink>
                <BsYoutube />
                YOUTUBE
              </NavLink>
            </FooterListItems>
            <FooterListItems>
              <NavLink>
                <FaSoundcloud />
                SOUNDCLOUD
              </NavLink>
            </FooterListItems>
          </ul>
        </div>
        <div>
          <p>Cosmic NRG Festival</p>
        </div>
        <ul>
          <FooterListItems>
            <NavLink to="/">HOME</NavLink>
          </FooterListItems>
          <FooterListItems>
            <NavLink to="/contact">CONTACT US</NavLink>
          </FooterListItems>
          <FooterListItems>
            <NavLink to="/terms"> TERMS AND CONDITIONS</NavLink>
          </FooterListItems>
          <FooterListItems>
            <NavLink to="/lineup">LINE UP</NavLink>
          </FooterListItems>
          <FooterListItems>
            <NavLink>TICKETS</NavLink>
          </FooterListItems>
        </ul>
      </FooterInfo>
      <Copyright>
        <p> © 2023 Copyright Cosmic NRG Music Festival.</p>
        <p> Website & Design By: SBL</p>
        <ScrollTop onClick={scrollTop}>Back to top</ScrollTop>
      </Copyright>
    </Baseline>
  );
};
export default Footer;

const Baseline = styled.div`
  display: flex;
  flex-direction: column;
  color: #f0e928;
  background-color: black;
  font-size: 18px;
  justify-content: space-around;
  color: #551a8b;
`;
const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #4cc8ed;
  padding: 50px 30px;
  color: #f0e928;
`;
const FooterInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 20px;
  font-size: 25px;
`;

const ScrollTop = styled.button`
  position: absolute;
  right: 0;
  all: unset;
  background-color: black;
`;

const FooterListItems = styled.li`
  display: flex;
  align-items: center;
  margin: 5px;

  &:hover {
    transition: 0.8s;
    scale: 1.08;
    color: #508b1a;
  }
`;
