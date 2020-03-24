import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import classnames from 'classnames';

const personalInfoDivStyle = {
    backgroundColor: "lightblue",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "12px",
    paddingRight: "40px",
    borderBottomRightRadius: "12px",
    borderTopRightRadius: "12px"
};

const Screen2 = (props) => {
    return (
      <div className="container">
          <Row>
              <div style={personalInfoDivStyle} >
                  Personal Info
              </div>
              
              </Row>
              <br />
          <Row>
              
              <Form>
      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input type="text" name="email" id="exampleEmail" placeholder="Name" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
          <Label for="exampleDate">Date</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
        </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="examplePassword">Location</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Location" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="examplePassword">Occupation</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Occupation" />
          </FormGroup>
        </Col>
      </Row>
      <br />
      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label for="examplePhone">Phone</Label>
            <Input type="text" name="city" id="exampleCity" placeholder="Phone"/>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="text" name="state" id="exampleState" placeholder="Email"/>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
          <Label for="exampleSelect">Sex</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Male</option>
          <option>Female</option>
        </Input>
            </FormGroup>  
        </Col>
      </Row>
      <br />
      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label for="examplePhone">Facebook profile</Label>
            <Input type="text" name="city" id="exampleCity" placeholder="Facebook profile"/>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="exampleEmail">Twitter profile</Label>
            <Input type="text" name="state" id="exampleState" placeholder="Twitter profile"/>
          </FormGroup>
        </Col>
        <Col md={3}>
        <FormGroup>
            <Label for="exampleEmail">Linkedin profile</Label>
            <Input type="text" name="state" id="exampleState" placeholder="Linkedin profile"/>
          </FormGroup>
        </Col>
      </Row>
      <br />
      <Row form>
        <Col md={3}>
          <FormGroup>
        <Label for="exampleCustomFileBrowser">Upload Photo</Label>
        <FormText color="muted">
          File Format PNG, JPG
            </FormText>
        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
            </FormGroup>
        </Col>
        <Col md={3}>
        <FormGroup>
        <Label for="exampleCustomFileBrowser">Upload Signature</Label>
        <FormText color="muted">
        Minimum Size 500KB
            </FormText>
        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
            </FormGroup>
        </Col>
      </Row>
    </Form>
          </Row>
          <br />
          <Row>
        <Col sm="8">
          
        </Col>
        <Col sm="1">
        <button type="button" className="btn btn-primary">Save</button>
        </Col>
        <Col sm="1">
        <button type="button" className="btn btn-primary text-center">Next</button>
        </Col>
      </Row>
    </div>
    );
  }

export default Screen2;