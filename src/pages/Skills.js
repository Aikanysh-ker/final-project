import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteSkill, fetchSkills } from "../store/actions/skills";
import SkillForm from "../components/SkillForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-regular-svg-icons";

const Skills = (id) => {
  let [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => setModal(!modal);

  useEffect(() => {
    dispatch(fetchSkills());
  }, []);

  let [selectedId, setSelectedId] = useState(0);

  let { skills } = useSelector((state) => state.skills);

  let { loading } = useSelector((state) => state.app);

  return (
    <>
      {loading ? (
        <div className="alert alert-danger">Loading ...</div>
      ) : (
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {!skills.length
                  ? "not found"
                  : skills.map((skill) => (
                      <tr>
                        <td>{skill.id}</td>
                        <td>{skill.name}</td>
                        <td>
                          <button
                            className="btn-icon"
                            onClick={() => {
                              setSelectedId(id);
                              setModal(true);
                            }}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>

                          <button
                            className="btn-icon"
                            onClick={() => {
                              dispatch(deleteSkill(id));
                            }}
                          >
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </button>
                        </td>
                      </tr>
                    ))}
                <button
                  className="btn btn-add"
                  onClick={() => {
                    setSelectedId(0);
                    toggle();
                  }}
                >
                  Add a skill
                </button>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add a new skill</ModalHeader>
        <ModalBody>
          <SkillForm id={selectedId} />
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-add" type="submit">
            Add
          </button>
          <button className="btn btn-add">Cancel</button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default Skills;
