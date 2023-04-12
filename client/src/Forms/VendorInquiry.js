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

const VendorInquiry = ({ handleChange, handleClick, returnFormSelect }) => {
  return (
    <PageLayout>
      <FormTitle>Vendor application</FormTitle>
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
          <FormLabel>Business Name:</FormLabel>
          <Input
            required
            type="text"
            id="businessName"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />{" "}
        </FormLayout>
        <FormLayout>
          <FormLabel>Business address</FormLabel>
          <Input
            required
            type="text"
            id="businessAddress"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />{" "}
        </FormLayout>
        <FormLayout>
          <FormLabel>Business Website:</FormLabel>
          <Input
            required
            type="text"
            id="businessWebsite"
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
          <FormLabel>
            {" "}
            Brief business description (please specify your products):
          </FormLabel>
          <Input
            required
            type="text"
            id="desc"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />
        </FormLayout>
        <FormLayout>
          <FormLabel>Do you require additional vendor passes?:</FormLabel>
          <Input
            required
            type="text"
            id="passes"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
          />
        </FormLayout>
        <FormLayout>
          <FormLabel>
            Have you attended music festivals before? Which ones? :
          </FormLabel>
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
          <FormLabel>How do you support arts in your community? :</FormLabel>
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
          <FormLabel>
            How will you positively contribute to our growing community and an
            exceptional festival experience for guests?:
          </FormLabel>
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
          <FormLabel>Company Logo:</FormLabel>
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
          If requested, are you able to submit a 30 minute or 1 hour set For
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
        <div>
          Do you agree to have your booth set up and ready to go for when the
          festival starts June 23 at 6pm?
        </div>
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
          The Vendor shall provide goods and services at their own expense,
          including the necessary insurance, licenses, and other permits as
          required for the purpose of carrying out the provisions of this
          contract. Vendor insurance: Minimum 2,000,000 in liability insurance
          Food safe If requested, do you agree to provide required copies to
          event organizers? Food safe Jolly Beach Campground 2345 Belchrome
          Forest Service Rd Rock Creek, BC V0H 1Y0
        </div>
        <FormLayout>
          <input
            type="radio"
            id="liability"
            name="liability"
            value="Yes"
            onChange={(event) => {
              handleChange("Liability", event.target.value);
            }}
          />

          <FormLabel htmlFor="Liability1">Yes</FormLabel>
          <input
            type="radio"
            id="liability"
            name="liability"
            value="No"
            onChange={(event) => {
              handleChange("Liability", event.target.value);
            }}
          />
          <FormLabel htmlFor="Liability2">No</FormLabel>
        </FormLayout>
        <div>
          Do you agree to uphold the festival values of love, respect, unity,
          and respect?
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
        <div>
          Do you agree to promote the event on your social media and shops?
        </div>
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
          content htmlFor promotion?
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
        <Submit type="submit" onClick={handleClick}>
          Send
        </Submit>
      </Form>
    </PageLayout>
  );
};

export default VendorInquiry;
