import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";

const Home = () => {
  const myImage = new CloudinaryImage("sample", {
    cloudName: "dzeqhgz6k",
  }).resize(fill().width(100).height(150));

  // Render the image in a React component.
  return (
    <div>
      <img cldImg={myImage} />
    </div>
  );
};

export default Home;
