import { FormTitle } from "../NavBarElements/styledComponents";
import styled from "styled-components";
const SelectForm = ({ handleSelectedForm }) => {
  return (
    <>
      <FormTitle>Contact us</FormTitle>
      <FormLabel required>What is the reason of your inquiry:</FormLabel>
      <SelectBox onChange={handleSelectedForm} defaultValue={"idle"}>
        <option value={""}>Please select one of the following option :</option>
        <option value={"general"}>
          I have general question about the festival
        </option>
        <option value={"vendor"}>
          I would like to apply to be a vendor for the event
        </option>
        <option value={"dj"}>I would like to be a DJ at the event</option>
        <option value={"performer"}>
          I would like to be performing a workshop or be a performers at Cosmic
          NRG Festival
        </option>
      </SelectBox>
    </>
  );
};

export default SelectForm;

const FormLabel = styled.div`
  font-size: 30px;
  padding: 10px;
  margin: 10px;
`;

const SelectBox = styled.select`
  width: 100%;
  min-width: 30ch;
  max-width: 60ch;
  border: 1px solid purple;
  border-radius: 15px;
  padding: 0.3em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  margin: 10px 10px 40px 10px;
`;
