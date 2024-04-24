import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/
  
  const emailCheck = (username) => {
    return emailRegEx.test(username); //형식에 맞을 경우, true 리턴
  }

  const passwordCheck = (password) => {
    return passwordRegEx.test(password);
  }

  const navigate = useNavigate()
  // form를 사용할 경우 event.preventDefault() 를 사용해서 페이지 리프레쉬 방지
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate('/')
  }
  return (
    <Container>
      <Form onSubmit={(event)=> {loginUser(event)}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e)=>{setUsername(e.target.value); emailCheck(e.target.value)}} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onKeyDown={(e)=>{setPassword(e.target.value); passwordCheck(e.target.value)}} type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Login