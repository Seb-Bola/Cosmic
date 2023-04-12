import {
  PageLayout,
  Form,
  FormTitle,
  FormLayout,
  ContactMessage,
  FormLabel,
  Submit,
  Input,
  InputText,
  CharLimit,
  Return,
} from "../NavBarElements/styledComponents";

const GeneralInquiry = ({
  handleChange,
  returnFormSelect,
  handleCharacterLimit,
  inputText,
  characterLimit,
  submitForm,
  formData,
}) => {
  console.log(formData);
  return (
    <PageLayout>
      <FormTitle>General Inquiry</FormTitle>
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
          <FormLabel>
            <ContactMessage>
              Brief description of your inquiry
              <CharLimit value={characterLimit}>{characterLimit}</CharLimit>
            </ContactMessage>
          </FormLabel>
          <InputText
            required
            type="text"
            id="inquiry"
            rows={5}
            onChange={(event) => {
              handleCharacterLimit(event);
              handleChange(event.target.id, event.target.value);
            }}
          />
        </FormLayout>
        <Submit
          type="submit"
          disabled={characterLimit < 0 || inputText.length === 0}
          onClick={submitForm}
        >
          Send
        </Submit>
      </Form>
    </PageLayout>
  );
};
export default GeneralInquiry;
