import { PageLayout } from "../NavBarElements/styledComponents";

const CompletedForm = (formData) => {
  return (
    <PageLayout>
      Thanks for {formData.fName}! Your inquiry has been received. Our team will
      reach out to you as soon as possible!
    </PageLayout>
  );
};
export default CompletedForm;
