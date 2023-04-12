import { useEffect, useRef } from "react";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  //   useEffect(() => {
  //     cloudinaryRef.current = window.cloudinary;
  //     widgetRef.current = cloudinaryRef.current.createUploadWidget(
  //       {
  //         cloudname: "dzeqhgz6k",
  //         uploadPreset: "imageUpload",
  //       },
  //  (error, result)=> {
  //         // if (!error && result && result.event === "success") {
  //         //   console.log("Done! Here is the image info: ", result.info);
  //         // } else
  //         console.log(result);
  //       }
  //     );
  //     console.log(widgetRef.current);
  //   }, []);

  // const widget = () => {
  //   let openW = window.cloudinary.createUploadWidget(
  //     {
  //       cloudname: "dzeqhgz6k",
  //       uploadPreset: "imageUpload",
  //     },
  //     (error, result) => {
  //       console.log(result);
  //       if (!error && result && result.event === "success") {
  //         console.log("Done! Here is the image info: ", result.info);
  //       } else console.log(result);
  //     }
  //   );
  //   openW.open();
  // };
  const showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `dzeqhgz6k`,
        uploadPreset: `imageUpload`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info.url);
        }
      }
    );
    widget.open();
  };

  return <button onClick={showWidget}>Upload images to Cloudinary</button>;
};
export default UploadWidget;
