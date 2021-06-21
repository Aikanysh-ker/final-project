import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { addMentor, fetchMentors } from "../store/actions/mentors";
import { useSelector } from "react-redux";

const AddMentor = (id) => {
  let mentors = useSelector((state) => state.mentors);

  let mentorData = {};
  if (id == 0) {
    mentorData = {
      firstName: "",
      lastName: "",
      position: "",
      email: "",
      password: "",
      phone: "",
      company: "",
      competences: "",
      bio: "",
      acceptedTerms: false,
      jobType: "",
    };
  } else {
    let [selectedMentor] = mentors.filter((el) => el.id === id);

    mentorData = {
      ...selectedMentor,
    };
  }

  return (
    <>
      <Formik
        initialValues={{
          ...mentorData,
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            .oneOf(
              ["designer", "development", "product", "other"],
              "Invalid Job Type"
            )
            .required("Required"),
        })}
        onSubmit={(values) => {
          setTimeout(() => {
            dispatch(addMentor(values));
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="firstName" type="text">
            First Name
          </label>
          <Field id="firstName" name="firstName" />
          <label htmlFor="lastName" type="text">
            Last Name
          </label>
          <Field id="lastName" name="lastName" />

          <label htmlFor="position" type="text">
            Position
          </label>
          <Field id="position" name="position" />

          <label htmlFor="email" type="email">
            Email
          </label>
          <Field id="email" name="email" />

          <label htmlFor="company" type="text">
            Company
          </label>
          <Field id="company" name="company" />

          <label htmlFor="competences" type="text">
            Competences
          </label>
          <Field id="competences" name="competences" />

          <button type="submit">Add mentor</button>
        </Form>
      </Formik>
    </>
  );
};

export default AddMentor;
