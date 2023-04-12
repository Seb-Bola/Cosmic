import {
  PageLayout,
  FormTitle,
  Return,
  Form,
  FormLayout,
  FormLabel,
} from "../NavBarElements/styledComponents";

const GeneralForm = ({ form }) => {
  console.log(form);
  return (
    <PageLayout>
      <FormTitle>General Inquiry</FormTitle>
      {/* <Return onClick={returnFormSelect}>
    Click here to return to the main page
  </Return> */}
      <Form>
        <FormLayout>
          <FormLabel>First Name: {form.fName}</FormLabel>
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
          <FormLabel>Last Name: {form.lName}</FormLabel>
          {/* <Input
        required
        type="text"
        id="lName"
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
          <FormLabel>
            {" "}
            Inquiry: {form.inquiry}
            {/* <ContactMessage>
              Brief description of your inquiry
              <CharLimit value={characterLimit}>{characterLimit}</CharLimit>
            </ContactMessage> */}
          </FormLabel>
          {/* <InputText
        required
        type="text"
        id="comment"
        rows={5}
        onChange={handleCharacterLimit}
      /> */}
        </FormLayout>
        {/* <Submit
      type="submit"
      disabled={characterLimit < 0 || inputText.length === 0}
      onClick={submitForm}
    >
      Send
    </Submit> */}
      </Form>
    </PageLayout>
  );
};
export default GeneralForm;
