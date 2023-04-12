import AdminHead from "./AdminHeader";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useParams } from "react";
import FormTabs from "./FormTabs";
import CloudinaryManagement from "./CloudinaryManagement";

const Admin = () => {
  const [selectedType, setSelectedType] = useState();
  const [forms, setForms] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    fetch("/getForms")
      .then((res) => res.json())
      .then((data) => {
        setForms(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const markAsResolved = (id, forms, setForms) => {
    const updatedForm = forms.map((form) => {
      if (form._id === id) {
        return {
          ...form,
          status: "resolved",
        };
      } else {
        return form;
      }
    });
    setForms(updatedForm);
    fetch("/resolved", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: id,
        status: "resolved",
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            response.statusText + " Status changed " + response.status
          );
        }
      })
      .then((data) => {
        console.log("data sub", data);
      });
  };

  const handleDeleteForm = (id, forms, setForms) => {
    // event.preventDefault();
    const updatedForms = forms.filter((form) => form._id !== id);
    setForms(updatedForms);
    fetch("/deleteForm/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            response.statusText + " Status: deleted " + response.status
          );
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {forms ? (
        <>
          <AdminHead />
          <CloudinaryManagement />
          <FormTabs
            setSelectedType={setSelectedType}
            selectedType={selectedType}
          />
          {forms?.map((form) => {
            if (form.type === selectedType && form.status !== "resolved") {
              return (
                <div key={form._id}>
                  <div
                    onClick={(event) => {
                      event.stopPropagation();
                      navigate(`/adminpage/${form._id}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div>{form.formData.text}</div>
                    <div>
                      <p>{form.formData.fName}</p>
                      <p>{form.formData.lName}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => markAsResolved(form._id, forms, setForms)}
                  >
                    Mark as resolved
                  </button>
                  <button
                    onClick={() => handleDeleteForm(form._id, forms, setForms)}
                  >
                    Delete this inquiry
                  </button>
                </div>
              );
            }
          })}
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};
export default Admin;
