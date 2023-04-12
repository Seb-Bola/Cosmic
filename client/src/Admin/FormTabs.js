import { useEffect, useState } from "react";
import styled from "styled-components";

const FormTabs = ({ setSelectedType, selectedType }) => {
  const handleSelection = (event) => {
    let type = event.target.value;
    setSelectedType(type);
    console.log(type);
  };
  return (
    <>
      <Tabs>
        <InquiryTabs
          onClick={handleSelection}
          value="general"
          isSelected={selectedType === "general" ? "selected" : ""}
        >
          General Inquiries
        </InquiryTabs>
        <InquiryTabs
          onClick={handleSelection}
          value="dj"
          isSelected={selectedType === "dj" ? "selected" : ""}
        >
          Djs applications
        </InquiryTabs>
        <InquiryTabs
          onClick={handleSelection}
          value="vendor"
          isSelected={selectedType === "vendor" ? "selected" : ""}
        >
          Vendors applications
        </InquiryTabs>
        <InquiryTabs
          onClick={handleSelection}
          value="performer"
          isSelected={selectedType === "performer" ? "selected" : ""}
        >
          Performers applications
        </InquiryTabs>
      </Tabs>
    </>
  );
};
export default FormTabs;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 20px;
`;
const InquiryTabs = styled.button`
  all: unset;
  border-bottom: 0.5px solid gray;
  padding: 5px;
  &:hover {
    scale: 1.04;
    transition: 0.3s;
    color: red;
  }
  scale: ${(props, value, selected) =>
    props.isSelected === "selected" && selected === value ? "1.04" : "none"};
  color: ${(props, value, selected) =>
    props.isSelected === "selected" && selected === value ? "red" : "none"};
`;
