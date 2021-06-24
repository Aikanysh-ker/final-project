import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import MentorForm from "../components/MentorForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteMentor, fetchMentors } from "../store/actions/mentors";

const Mentors = () => {
  let [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => setModal(!modal);

  useEffect(() => {
    dispatch(fetchMentors());
  });

  let [selectedId, setSelectedId] = useState(0);

  let { mentors } = useSelector((state) => state.mentors);

  let { loading } = useSelector((state) => state.app);

  return (
    <>
      {loading ? (
        <div className="alert alert-danger">Loading ...</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>isAdmin</th>
                <th>isApproved</th>
                <th>isActive</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mentors.map((mentor) => (
                <tr>
                  <td>{mentor.id}</td>
                  <td>{mentor.firstName}</td>
                  <td>{mentor.lastName}</td>
                  <td>{mentor.email}</td>
                  <td>{mentor.company}</td>
                  <td>{mentor.isAdmin}</td>
                  <td>{mentor.isApproved}</td>
                  <td>{mentor.isActive}</td>
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
                Add a mentor
              </button>
            </tbody>
          </table>
        </div>
      )}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add a new mentor</ModalHeader>
        <ModalBody>
          <MentorForm id={selectedId} />
        </ModalBody>
      </Modal>
    </>
  );
};
export default Mentors;
