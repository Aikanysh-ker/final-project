import React, { useEffect, useState } from "react";
import { Table, Modal, ModalBody, ModalHeader } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteMentor, fetchMentors } from "../store/actions/mentors";

const Skills = () => {
  let [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => setModal(!modal);

  useEffect(() => {
    dispatch(fetchSkills());
  });

  let [selectedId, setSelectedId] = useState(0);

  let { skills } = useSelector((state) => state.skills);

  let { loading } = useSelector((state) => state.app);

  return (
    <>
      {loading ? (
        <div className="alert alert-danger">Loading ...</div>
      ) : (
        <Table className="container">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr>
                <td>{mentor.id}</td>
                <td>{mentor.name}</td>
                <td>
                  <button
                  // onClick={() => {
                  //   setSelectedId(id);
                  //   setModal(true);
                  // }}
                  >
                    Edit
                  </button>

                  <button
                  // onClick={() => {
                  //   dispatch(deleteMentor(id));
                  // }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <button
              onClick={() => {
                setSelectedId(0);
                toggle();
              }}
            >
              Add a skill
            </button>
          </tbody>
        </Table>
      )}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add a new skill</ModalHeader>
        <ModalBody>
          <SkillForm id={selectedId} />
        </ModalBody>
      </Modal>
    </>
  );
};
export default Skills;
