import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Button, FormGroup,
   Label, Input, Form } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <Form>
                <div className= "App">
                  <img src={logo}  alt="logo" />
                </div>
                <br/><br/>
                <FormGroup>
                  <h5>Email</h5>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Input email address" />
                </FormGroup>
                <FormGroup>
                <h5>Password</h5>
                  <Input type="password" name="password" id="examplePassword" placeholder="Input password" />
                </FormGroup>
                <Button color="primary" size="lg" block>Sign In</Button>
            </Form>
            </CardBody>
        </Card>
      </div>
    );
  }
}
export default App;
