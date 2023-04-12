import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { Centered, FestivalTitle, CosmicTitle } from "../styledComponents";
import styled from "styled-components";

const Home = () => {
  const myImage = new CloudinaryImage("Cosmic NRG/MilkyWay", {
    cloudName: "dzeqhgz6k",
  }).resize(fill().width(1000).height(330));

  // Render the image in a React component.
  return (
    <Page>
      <Centered>
        <CosmicTitle>COSMIC NRG</CosmicTitle>
        <FestivalTitle>MUSIC FESTIVAL</FestivalTitle>
      </Centered>
      <Centered>
        <AdvancedImage cldImg={myImage} />
      </Centered>
    </Page>
  );
};

export default Home;

const Page = styled.div`
  background: black;
  color: white;
`;
