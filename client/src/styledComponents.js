import styled from "styled-components";
// Form styled-components

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px grey;
  width: 1000px;
  margin: 30px;
  padding: 10px;
`;

export const FormTitle = styled.div`
  font-size: 40px;
  font-weight: lighter;
  text-align: center;
  text-shadow: 0px 1px grey;
  padding: 5px;
`;
export const FormLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  width: 95%;
`;
export const ContactMessage = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormLabel = styled.label`
  font-size: 25px;
  width: 500px;
  /* padding-left: 40px; */
`;
export const Submit = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  border: 2px solid;
  text-decoration: none;
`;
export const Return = styled.button`
  all: unset;
  &:hover {
    scale: 1.05;
  }
`;

// Inputs and Text Area
export const Input = styled.input`
  width: 500px;
  padding: 10px;
  border: solid 1px purple;
`;
export const InputText = styled.textarea`
  width: 500px;
  padding: 10px;
  border: solid 1px purple;
  resize: none;
`;
export const CharLimit = styled.div`
  color: ${({ value }) =>
    value < 0 ? "red" : value <= 55 ? "darkorange" : "black"};
  text-align: end;
  top: 90px;
  width: 10px;
  margin-right: 15px;
  /* padding-right: 40px; */
  position: relative;
`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// Titles

export const CosmicTitle = styled.p`
  font-size: 50px;
`;
export const FestivalTitle = styled.p`
  font-size: 40px;
`;
