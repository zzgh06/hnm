import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const dispatch = useDispatch()
  // form를 사용할 경우 event.preventDefault() 를 사용해서 페이지 리프레쉬 방지
  const loginUser = (event) => {
    event.preventDefault();
    dispatch(authenticateAction.login(id, password))
    navigate('/')
  }
  return (
    <Container>
      <Form onSubmit={(event)=> {loginUser(event)}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e)=>{setId(e.target.value)}} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Login