import React from "react";
import { Row, Col, Form } from "react-bootstrap";
const FormElement = ({step, children, placeholder, type, name, value, onChange, zakatpay,z}) => {
  return (
    <Form.Group as={Row}>
      <Form.Label column sm="6">
       {children}
      </Form.Label>
      <Col sm="4">
        <Form.Control data-z={z} step={step} id={name} type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
      </Col>
      <Col sm="2">
        <div>
          {zakatpay}
        </div>
      </Col>
    </Form.Group>
  );
};

export default FormElement;
