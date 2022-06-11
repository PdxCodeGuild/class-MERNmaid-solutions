import { useState } from 'react';
import axios from 'axios';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Person = (props) => {

  const [show, setShow] = useState(false);
  const [editPerson, setEditPerson] = useState({
    firstName: props.person.firstName,
    lastName: props.person.lastName
  });

  const handleClick = () => {
    setShow(true);
  }

  const handleChange = (e) => {
    setEditPerson({...editPerson, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.patch(`http://localhost:3030/people/${props.person._id}`, editPerson)
    .then(props.getPeople);

    setShow(false);
  };

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3030/people/${props.person._id}`)
      .then(props.getPeople);

    setShow(false);
  }
  
  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="person">
      <h3 onClick={handleClick}>{props.person.firstName} {props.person.lastName}</h3>
      { show &&
        <Modal id="editModal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <input
              name="firstName"
              value={editPerson.firstName}
              onChange={handleChange}
              placeholder="first name"
              type="text"
            />
            <input
              name="lastName"
              value={editPerson.lastName}
              onChange={handleChange}
              placeholder="last name"
              type="text"
            />
            <Button type="submit">
              Save Changes
            </Button>
          </form>
          <Button onClick={handleDelete}>delete person</Button>
        </Modal.Body>
        </Modal>
      }
    </div>
  );
};

export default Person;
