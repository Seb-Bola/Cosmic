import { useState } from "react";
import styled from "styled-components";
import DjInquiry from "./DjInquiry";
import GeneralInquiry from "./GenInquiry";
import SelectForm from "./SelectForm";
import CompletedForm from "./CompletedForm";
import VendorInquiry from "./VendorInquiry";
import PerformerInquiry from "./PerformerInquiry";
import Alien from "../components/Alien";

const Contact = () => {
  const [formData, setFormData] = useState();
  // const [formStatus, setFormStatus] = useState("empty");
  const [selectedForm, setSelectedForm] = useState("idle");
  const [inputText, setInput] = useState("");
  const [characterLimit, setLimit] = useState(300);
  const [status, setStatus] = useState("pending");

  const handleCharacterLimit = (event) => {
    const textEntry = event.target.value;
    setInput(event.target.value);
    setLimit(300 - textEntry.length);
  };

  const returnFormSelect = () => {
    setSelectedForm("idle");
  };
  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSelectedForm = (event) => {
    let chosen = event.target.value;
    setSelectedForm(chosen);
    setStatus("pending");
  };
  const submitForm = (event) => {
    event.preventDefault();
    setSelectedForm("filling");
    fetch("/postForm", {
      method: "POST",
      body: JSON.stringify({
        formData,
        type: selectedForm,
        status: "pending",
        comment: [],
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        response.json();
      })
      .then((json) => {
        const { status, error } = json;
        if (status === "pending") {
          setSelectedForm("confirmed");
          console.log(status);
        } else if (error) {
          setSelectedForm("error");
        }
      });
  };
  switch (selectedForm) {
    case "idle":
      return (
        <SelectForm
          handleSelectedForm={handleSelectedForm}
          selectedForm={selectedForm}
        />
      );
    case "general":
      return (
        <GeneralInquiry
          formData={formData}
          inputText={inputText}
          characterLimit={characterLimit}
          handleChange={handleChange}
          returnFormSelect={returnFormSelect}
          handleCharacterLimit={handleCharacterLimit}
          submitForm={submitForm}
          setFormData={setFormData}
        />
      );
    case "dj":
      return (
        <DjInquiry
          selectedForm={selectedForm}
          handleChange={handleChange}
          returnFormSelect={returnFormSelect}
          handleCharacterLimit={handleCharacterLimit}
          characterLimit={characterLimit}
          inputText={inputText}
          submitForm={submitForm}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case "performer":
      return (
        <PerformerInquiry
          selectedForm={selectedForm}
          handleChange={handleChange}
          returnFormSelect={returnFormSelect}
          handleCharacterLimit={handleCharacterLimit}
          characterLimit={characterLimit}
          inputText={inputText}
          submitForm={submitForm}
          formData={formData}
        />
      );
    case "vendor":
      return (
        <VendorInquiry
          selectedForm={selectedForm}
          handleChange={handleChange}
          returnFormSelect={returnFormSelect}
          handleCharacterLimit={handleCharacterLimit}
          characterLimit={characterLimit}
          inputText={inputText}
          submitForm={submitForm}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case "completed":
      return <CompletedForm formData={formData} />;
    default:
      <Alien />;
  }
};

export default Contact;
