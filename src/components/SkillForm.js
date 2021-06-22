import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { addMentor } from "../store/actions/mentors";
import { useDispatch, useSelector } from "react-redux";

const AddSkill = (id) => {
  let skills = useSelector((state) => state.skills);
  let dispatch = useDispatch();
  let skillData = {};
  if (id == 0) {
    skillData = {
      name: "",
    };
  } else {
    let [selectedSkill] = skills.filter((el) => el.id === id);

    mentorData = {
      ...selectedSkill,
    };
  }

  return (
    <>
      <Formik
        initialValues={{
          ...skillData,
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        })}
        onSubmit={(values) => {
          setTimeout(() => {
            dispatch(addSkill(values));
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="name" type="text">
            Name
          </label>
          <Field id="name" name="name" />
          <button type="submit">Add skill</button>
        </Form>
      </Formik>
    </>
  );
};

export default AddSkill;
