import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample() {
  const [person, setPerson] = useState({
    email: '',
    fullname: '',
    address1: '',
    address2: '',
    city: '',
    state: 'Choose...',
    zip: '',
    checkbox: false,
  });

  const [enteredData, setEnteredData] = useState(null);

  const onValueChanged = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setPerson({
      ...person,
      [name]: inputValue,
    });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    setEnteredData({ ...person });
  };

  return (
    <div>
      <Form className='FormContainer' onSubmit={(e) => onSubmitForm(e)}>
        <h1>Data Entry Form</h1>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => onValueChanged(e)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Fullname</Form.Label>
            <Form.Control
              placeholder="Full Name"
              name="fullname"
              onChange={(e) => onValueChanged(e)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            name="address1"
            onChange={(e) => onValueChanged(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            name="address2"
            onChange={(e) => onValueChanged(e)}
            
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              name="city"
              onChange={(e) => onValueChanged(e)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              name="state"
              onChange={(e) => onValueChanged(e)}
            >
              <option>Choose...</option>
              <option>Alberta</option>
              <option>British Columbia</option>
              <option>Manitoba</option>
              <option>New Brunswick</option>
              <option>Newfoundland and Labrador</option>
              <option>Nova Scotia</option>
              <option>Ontario</option>
              <option>Prince Edward Island</option>
              <option>Quebec</option>
              <option>Saskatchewan</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              name="zip"
              onChange={(e) => onValueChanged(e)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3 d-flex" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Agree Terms and Conditions?"
            name="checkbox"
            checked={person.checkbox}
            onChange={(e) => onValueChanged(e)}
            className="d-flex align-items-center"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {enteredData && (
        <div className='data-container'>
          <h3 className='entry-data'>Entered Data:</h3>
          <dl>
            <dt>Email:</dt>
            <dd>{enteredData.email}</dd>

            <dt>Full Name:</dt>
            <dd>{enteredData.fullname}</dd>

            <dt>Address:</dt>
            <dd>{person.address1}</dd>

            <dt>Address 2:</dt>
            <dd>{person.address2}</dd>

            <dt>City:</dt>
            <dd>{person.city}</dd>

            <dt>State:</dt>
            <dd>{person.state}</dd>

            <dt>Zip:</dt>
            <dd>{person.zip}</dd>

            <dt>Checkbox:</dt>
            <dd>{enteredData.checkbox ? 'Checked' : 'Unchecked'}</dd>
          </dl>
        </div>
      )}
    </div>
  );
}

export default GridComplexExample;