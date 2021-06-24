import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { addSkill } from "../store/actions/skills";
import { useDispatch, useSelector } from "react-redux";
import { ModalFooter } from "reactstrap";

const AddSkill = (id) => {
  let skills = useSelector((state) => state.skills);
  let dispatch = useDispatch();
  // let skillData = {};
  // if (id == 0) {
  //   skillData = {
  //     name: "",
  //   };
  // } else {
  //   let [selectedSkill] = skills.filter((el) => el.id === id);

  //   skillData = {
  //     ...selectedSkill,
  //   };
  // }

  return (
    <>
      <Formik
        initialValues={{
          name: "",
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
          <div class="mb-3 row">
            <label
              className="col-sm-2 col-form-label"
              htmlFor="name"
              type="text"
            >
              Name
            </label>
            <Field id="name" name="name" className="col-sm-10" />
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default AddSkill;
