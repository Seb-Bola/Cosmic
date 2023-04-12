import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageLayout,
  FormTitle,
  Return,
  Form,
  FormLayout,
  FormLabel,
} from "../NavBarElements/styledComponents";
const DjForm = ({ form }) => {
  const [djF, setDjF] = useState({
    id: "a12323",
    type: "dj",
    fName: "Seb",
    lName: "BL",
    phone: "1234",
    email: "sef@gmail.com",
    djName: "dsa",
    SCloud: "dsa",
    fb: "rewq",
    insta: "trqew",
    genre:
      "lkfd rdwfmdsfdsfdfda sfd fd fdsalfdnjf v f ffdifoksdlafd vdvvasd dvndkvljksvnls",
    eventResume:
      "lkfd rdwfmdsfdsfdfda sfd fd fdsalfdnjf v f ffdifoksdlafd vdvvasd dvndkvljksvnls fd rdwfmdsfdsfdfda sfd fd fdsalfdnjf v f ffdifoksdlafd vdvvasd dvnd fd rdwfmdsfdsfdfda sfd fd fdsalfdnjf v f ffdifoksdlafd vdvvasd dvnd fd rdwfmdsfdsfdfda sfd fd fdsalfdnjf v f ffdifoksdlafd vdvvasd dvnd fd rdwfmdsfdsfdfda sfd fd fdsalfdnjf v f ffdifoksdlafd vdvvasd dvnd fd rdwfmdsfdsfdfda sfd fd fdsalfdnjf v f ffdifoksdlafd vdvvasd dvnd fd rdwfmdsfdsfdfda sfd fd fdsalfdnjf v f ffdifoksdlafd vdvvasd dvndv",
    Preview: " Yes",
    Promote: "Yes",
    Blastpromote: "No",
    Respect: "Yes",
  });

  // FETCH ALL ITEMS INSIDE OF ORDER COLLECTION
  // useEffect(() => {
  //   fetch("/cartitems")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Error");
  //       }
  //     })
  //     .then((resp_json) => {
  //       setItems(resp_json.data);

  //       setLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  const navigate = useNavigate();
  return (
    <PageLayout>
      <button
        onClick={(event) => {
          event.stopPropagation();
          navigate(`/adminpage`);
          window.scrollTo(0, 0);
        }}
      >
        to form{" "}
      </button>
      <FormTitle>DJ Form</FormTitle>
      {/* <Return onClick={returnFormSelect}> */}
      {/* Click here to return to the menu
      </Return> */}
      <div>
        <button>Edit</button>
      </div>
      <Form>
        <FormLayout>
          <FormLabel>Name: {form.fName + " " + form.lName}</FormLabel>
          {/* <Input
            required
            type="text"
            id="fName"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          /> */}
        </FormLayout>
        <FormLayout>
          <FormLabel>Email: {form.email}</FormLabel>
          {/* <Input
            required
            type="text"
            id="email"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          /> */}
        </FormLayout>
        <FormLayout>
          <FormLabel>Phone number: {form.phone}</FormLabel>
          {/* <Input
            required
            type="text"
            id="phone"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />{" "} */}
        </FormLayout>
        <FormLayout>
          <FormLabel>Dj Name: {form.djName}</FormLabel>
          {/* <Input
            required
            type="text"
            id="DjName"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />{" "} */}
        </FormLayout>
        <FormLayout>
          <FormLabel>SoundCloud Link: {form.SCloud}</FormLabel>
          {/* <Input
            required
            type="text"
            id="SCloud"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />{" "} */}
        </FormLayout>
        <FormLayout>
          <FormLabel>Facebook link: {form.fb}</FormLabel>
          {/* <Input
            required
            type="text"
            id="Fb"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />{" "} */}
        </FormLayout>
        <FormLayout>
          <FormLabel>Instagram link: {form.insta}</FormLabel>
          {/* <Input
            required
            type="text"
            id="insta"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          /> */}
        </FormLayout>
        <FormLayout>
          <FormLabel>Genre (with brief description): {form.genre}</FormLabel>
          {/* <Input
            required
            type="text"
            id="genre"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          /> */}
        </FormLayout>
        <FormLayout>
          <FormLabel>Event Resume: {form.eventResume}</FormLabel>
          {/* <Input
            required
            type="text"
            id="eventResume"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          /> */}
        </FormLayout>
        <FormLayout>
          <FormLabel>Dj Logo: {form.logo}</FormLabel>
          {/* <Input
            required
            type="file"
            id="eventLogo"
            accept="image/png, image/jpeg"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          /> */}
        </FormLayout>
        <div>
          If requested, are you able to submit a 30 minute or 1 hour set for
          review?
        </div>
        <FormLayout>
          {/* <input
            type="radio"
            id="preview"
            name="Preview"
            value="Yes"
            onChange={(event) => {
              handleChange("Preview", event.target.value);
            }}
          /> */}
          <FormLabel>{form.Preview}</FormLabel>
          {/* <FormLabel for="preview1">Yes</FormLabel> */}
          {/* <input
            type="radio"
            id="preview"
            name="Preview"
            value="No"
            onChange={(event) => {
              handleChange("Preview", event.target.value);
            }}
          /> */}
          {/* <FormLabel for="preview2">No</FormLabel> */}
        </FormLayout>
        <div>Do you agree to adhere to set start and end times?</div>
        <FormLayout>
          {/* <input
            type="radio"
            id="start"
            name="Start"
            value="Yes"
            onChange={(event) => {
              handleChange("Start", event.target.value);
            }}
          /> */}

          <FormLabel>{form.Start}</FormLabel>
          {/* <input
            type="radio"
            id="start"
            name="Start"
            value="No"
            onChange={(event) => {
              handleChange("Start", event.target.value);
            }}
          /> */}
          {/* <FormLabel for="Start2">No</FormLabel> */}
        </FormLayout>
        <div>
          Do you agree to uphold the festival values of peace, love, unity, and
          respect?
        </div>
        <FormLayout>
          {/* <input
            type="radio"
            id="respect"
            name="Respect"
            value="Yes"
            onChange={(event) => {
              handleChange("Respect", event.target.value);
            }}
          /> */}
          <FormLabel>{form.Respect}</FormLabel>
          {/* <FormLabel for="Respect1">Yes</FormLabel> */}
          {/* <input
            type="radio"
            id="respect"
            name="Respect"
            value="No"
            onChange={(event) => {
              handleChange("Respect", event.target.value);
            }}
          /> */}
          {/* <FormLabel for="Respect2">No</FormLabel> */}
        </FormLayout>
        <div>Do you agree to promote the event on your social media?</div>
        <FormLayout>
          {/* <input
            type="radio"
            id="promote"
            name="Promote"
            value="Yes"
            onChange={(event) => {
              handleChange("Respect", event.target.value);
            }}
          /> */}
          <FormLabel> {form.Promote}</FormLabel>
          {/* <FormLabel for="Prom1">Yes</FormLabel> */}
          {/* <input
            type="radio"
            id="promote"
            name="Promote"
            value="No"
            onChange={(event) => {
              handleChange("Promote", event.target.value);
            }}
          /> */}
          {/* <FormLabel for="Prom2">No</FormLabel> */}
        </FormLayout>
        <div>
          Do you agree to let Blast Off Beatz use your photos and social media
          content for promotion?
        </div>
        <FormLayout>
          {/* <input
            type="radio"
            id="Blastpromote"
            name="Blastpromote"
            value="Yes"
            onChange={(event) => {
              handleChange("Blastpromote", event.target.value);
            }}
          /> */}
          <FormLabel> {form.Blastpromote}</FormLabel>
          {/* <FormLabel for="Blastpromote1">Yes</FormLabel> */}
          {/* <input
            type="radio"
            id="Blastpromote"
            name="Blastpromote"
            value="No"
            onChange={(event) => {
              handleChange("Blastpromote", event.target.value);
            }}
          /> */}
          {/* <FormLabel for="Blastpromote2">No</FormLabel> */}
        </FormLayout>
        {/* <Submit type="submit" onClick={handleClick}>
          Send
        </Submit> */}
      </Form>
    </PageLayout>
  );
};
export default DjForm;
