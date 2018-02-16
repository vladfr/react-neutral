import { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Login extends Component {
    state = {
        name: 'react'
    };
    
    render() {
        return (
            <Form className="form-signin">
                <h3 className="h3 mb-3 font-weight-normal">Please sign in</h3>
                <FormGroup>
                    <Label for= "inputEmail">Email address</Label>
                    <Input type="email" name="email" id="inputEmail" placeholder="Email address" required />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Your password" required />
                </FormGroup>
                <Button color="primary">Sign in</Button>
            </Form>
        );
    }
}
