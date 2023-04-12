import styled from "styled-components";

const InquirySent = ({ formData }) => (
  <Layout>
    Thanks for {formData.fName}! Your order inquiry has been received. Our team
    will reach out to you as soon as possible.
  </Layout>
);

const Layout = styled.p`
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

export default InquirySent;
