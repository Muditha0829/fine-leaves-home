import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';

class ContactUsForm extends Component {
  render() {
    return (
      <div>
         
    
          <h5>Have any quiestions? We'd love to hear from you. </h5>
          <h6>Please view our Privacy Policy for further details on how we handle your data and your rights.</h6>
          
        <form>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter your message here..."/>
        </Form.Group>
        </Form>
        
      <Button variant="contained" color="primary">Submit</Button>
        </form>
      </div>
    );
  }
}

export default ContactUsForm;