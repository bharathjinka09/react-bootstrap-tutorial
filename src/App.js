import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container,Row,Col,Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
          <Row>
          <Col md>
          <Form.Group controlId='formEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Email'/>
            <Form.Text className='text-muted'>
              We'll never share your email
            </Form.Text>
          </Form.Group>
          </Col>
          <Col md>
           <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password'/>
          </Form.Group>
          </Col>

          </Row>
            <Button className='mb-3' type='submit' variant='info'>Login</Button>
        </Form>


        <Card className='mb-3' style={{color: 'black'}}>
          <Card.Img width='100%' src="https://picsum.photos/200/50" />
          <Card.Body>
            <Card.Title>
              Title
            </Card.Title>
            <Card.Text>
              This is an example text
            </Card.Text>
            <Button variant='primary'>Read more...</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>About</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">Message Sent!</Alert>
        <Button className='mb-3'>Send</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
