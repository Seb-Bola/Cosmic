import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Alien from "../components/Alien";
import DjForm from "./DjForm";
import GeneralForm from "./GeneralForm";
import VendorForm from "./VendorForm";
import PerformerForm from "./PerformerForm";

const FormDetails = () => {
  // const [form, setForm] = useState({
  //   id: "a12323",
  //   type: "dj",
  //   fName: "Seb",
  //   lName: "BL",
  //   phone: "1234",
  //   email: "sef@gmail.com",
  //   djName: "dsa",
  //   SCloud: "dsa",
  //   fb: "rewq",
  //   insta: "trqew",
  //   genre:
  //     "lkfd rdwfmdsfdsfdfda sfd fd fdsalfdnjf v f ffdifoksdlafd vdvvasd dvndkvljksvnls",
  //   eventResume:
  //     "lkfd rdwfmdsfdsfdfda sfd fd fdsalfdnjf v f ffdifoksdlafd vdvvasd dvndkvljksvnls fd rdwfmdsfdsfdfda sfd fd fdsalfdnjf v f ffdifoksdlafd vdvvasd dvnd fd rdwfmdsfdsfdfda sfd fd fdsalfdnjf v f ffdifoksdlafd vdvvasd dvnd fd rdwfmdsfdsfdfda sfd fd fdsalfdnjf v f ffdifoksdlafd vdvvasd dvnd fd rdwfmdsfdsfdfda sfd fd fdsalfdnjf v f ffdifoksdlafd vdvvasd dvnd fd rdwfmdsfdsfdfda sfd fd fdsalfdnjf v f ffdifoksdlafd vdvvasd dvnd fd rdwfmdsfdsfdfda sfd fd fdsalfdnjf v f ffdifoksdlafd vdvvasd dvndv",
  //   Preview: " Yes",
  //   Start: "Yes",
  //   Promote: "Yes",
  //   Blastpromote: "No",
  //   Respect: "Yes",
  // });
  const [revised, setRevisedData] = useState();
  const [inputText, setInput] = useState("");
  const [characterLimit, setLimit] = useState(300);
  const { _id } = useParams();
  const [form, setForm] = useState();
  console.log(_id);
  useEffect(() => {
    fetch(`/getForm/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm(data.data);
        console.log(data.data.formData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [_id]);
  // const handleCharacterLimit = (event) => {
  //   const textEntry = event.target.value;
  //   setInput(event.target.value);
  //   setLimit(300 - textEntry.length);
  // };

  // const returnFormSelect = () => {
  //   setSelectedForm("idle");
  // };
  // const handleChange = (key, value) => {
  //   setFormData({
  //     ...revisedData,
  //     [key]: value,
  //   });
  // };
  // const editForm = (event) => {
  //   event.preventDefault();
  //   setSelectedForm("filling");
  //   fetch("/contact", {
  //     method: "PATCH",
  //     body: JSON.stringify({
  //       ...formData,
  //       type: selectedForm,
  //       status: "active",
  //     }),
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       response.json();
  //     })
  //     .then((json) => {
  //       const { status, error } = json;
  //       if (status === "completed") {
  //         setSelectedForm("confirmed");
  //         console.log(status);
  //       } else if (error) {
  //         setSelectedForm("error");
  //       }
  //     });
  // };
  if (form) {
    switch (form.type) {
      case "general":
        return <GeneralForm form={form.formData} />;
      case "dj":
        return (
          <DjForm
            form={form.formData}
            // handleChange={handleChange}
            // handleCharacterLimit={handleCharacterLimit}
            // characterLimit={characterLimit}
            // inputText={inputText}
            // submitForm={submitForm}
          />
        );
      case "performer":
        return (
          <PerformerForm
            // handleChange={handleChange}
            form={form.formData}
            // handleCharacterLimit={handleCharacterLimit}
            // characterLimit={characterLimit}
            // inputText={inputText}
            // submitForm={submitForm}
          />
        );
      case "vendor":
        return (
          <VendorForm
            // handleChange={handleChange}
            form={form}
            // handleCharacterLimit={handleCharacterLimit}
            // characterLimit={characterLimit}
            // inputText={inputText}
            // submitForm={submitForm}
          />
        );
      default:
        <Alien />;
    }
  }
};

export default FormDetails;
