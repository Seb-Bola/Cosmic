import {
  PageLayout,
  Form,
  FormTitle,
  FormLayout,
  FormLabel,
  Submit,
  Input,
  Return,
} from "../NavBarElements/styledComponents";
const DjInquiry = ({ handleChange, returnFormSelect, submitForm }) => {
  return (
    <PageLayout>
      <FormTitle>DJ application</FormTitle>
      <Return onClick={returnFormSelect}>
        Click here to return to the menu
      </Return>
      <Form>
        <FormLayout>
          <FormLabel>First Name:</FormLabel>
          <Input
            required
            type="text"
            id="fName"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />
        </FormLayout>
        <FormLayout>
          <FormLabel>Last Name:</FormLabel>
          <Input
            required
            type="text"
            id="lName"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />
        </FormLayout>
        <FormLayout>
          <FormLabel>Email:</FormLabel>
          <Input
            required
            type="text"
            id="email"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />
        </FormLayout>
        <FormLayout>
          <FormLabel>Phone number:</FormLabel>
          <Input
            required
            type="text"
            id="phone"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />{" "}
        </FormLayout>
        <FormLayout>
          <FormLabel>Dj Name:</FormLabel>
          <Input
            required
            type="text"
            id="DjName"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />
        </FormLayout>
        <FormLayout>
          <FormLabel>SoundCloud Link:</FormLabel>
          <Input
            required
            type="text"
            id="SCloud"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />{" "}
        </FormLayout>
        <FormLayout>
          <FormLabel>Facebook link:</FormLabel>
          <Input
            required
            type="text"
            id="Fb"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />{" "}
        </FormLayout>
        <FormLayout>
          <FormLabel>Instagram link:</FormLabel>
          <Input
            required
            type="text"
            id="insta"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />
        </FormLayout>
        <FormLayout>
          <FormLabel>Genre (with brief description):</FormLabel>
          <Input
            required
            type="text"
            id="genre"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />
        </FormLayout>
        <FormLayout>
          <FormLabel>Event Resume:</FormLabel>
          <Input
            required
            type="text"
            id="eventResume"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />
        </FormLayout>
        <FormLayout>
          <FormLabel>Dj Logo:</FormLabel>
          <Input
            required
            type="file"
            id="eventLogo"
            accept="image/png, image/jpeg"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />
        </FormLayout>
        <div>
          If requested, are you able to submit a 30 minute or 1 hour set for
          review?
        </div>
        <FormLayout>
          <input
            type="radio"
            id="preview"
            name="Preview"
            value="Yes"
            onChange={(event) => {
              handleChange("Preview", event.target.value);
            }}
          />

          <FormLabel htmlFor="preview1">Yes</FormLabel>
          <input
            type="radio"
            id="preview"
            name="Preview"
            value="No"
            onChange={(event) => {
              handleChange("Preview", event.target.value);
            }}
          />
          <FormLabel htmlFor="preview2">No</FormLabel>
        </FormLayout>
        <div>Do you agree to adhere to set start and end times?</div>
        <FormLayout>
          <input
            type="radio"
            id="start"
            name="Start"
            value="Yes"
            onChange={(event) => {
              handleChange("Start", event.target.value);
            }}
          />

          <FormLabel htmlFor="Start1">Yes</FormLabel>
          <input
            type="radio"
            id="start"
            name="Start"
            value="No"
            onChange={(event) => {
              handleChange("Start", event.target.value);
            }}
          />
          <FormLabel htmlFor="Start2">No</FormLabel>
        </FormLayout>
        <div>
          Do you agree to uphold the festival values of peace, love, unity, and
          respect?
        </div>
        <FormLayout>
          <input
            type="radio"
            id="respect"
            name="Respect"
            value="Yes"
            onChange={(event) => {
              handleChange("Respect", event.target.value);
            }}
          />

          <FormLabel htmlFor="Respect1">Yes</FormLabel>
          <input
            type="radio"
            id="respect"
            name="Respect"
            value="No"
            onChange={(event) => {
              handleChange("Respect", event.target.value);
            }}
          />
          <FormLabel htmlFor="Respect2">No</FormLabel>
        </FormLayout>
        <div>Do you agree to promote the event on your social media?</div>
        <FormLayout>
          <input
            type="radio"
            id="promote"
            name="Promote"
            value="Yes"
            onChange={(event) => {
              handleChange("Respect", event.target.value);
            }}
          />

          <FormLabel htmlFor="Prom1">Yes</FormLabel>
          <input
            type="radio"
            id="promote"
            name="Promote"
            value="No"
            onChange={(event) => {
              handleChange("Promote", event.target.value);
            }}
          />
          <FormLabel htmlFor="Prom2">No</FormLabel>
        </FormLayout>
        <div>
          Do you agree to let Blast Off Beatz use your photos and social media
          content for promotion?
        </div>
        <FormLayout>
          <input
            type="radio"
            id="Blastpromote"
            name="Blastpromote"
            value="Yes"
            onChange={(event) => {
              handleChange("Blastpromote", event.target.value);
            }}
          />

          <FormLabel htmlFor="Blastpromote1">Yes</FormLabel>
          <input
            type="radio"
            id="Blastpromote"
            name="Blastpromote"
            value="No"
            onChange={(event) => {
              handleChange("Blastpromote", event.target.value);
            }}
          />
          <FormLabel htmlFor="Blastpromote2">No</FormLabel>
        </FormLayout>
        <Submit type="submit" onClick={submitForm}>
          Send
        </Submit>
      </Form>
    </PageLayout>
  );
};
export default DjInquiry;
