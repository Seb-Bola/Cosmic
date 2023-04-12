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
const PerformerInquiry = ({ handleChange, handleClick, returnFormSelect }) => {
  return (
    <PageLayout>
      <FormTitle>Vendor Inquiry</FormTitle>
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
        <Submit type="submit" onClick={handleClick}>
          Send
        </Submit>
      </Form>
    </PageLayout>
  );
};

export default PerformerInquiry;
