import { React, useRef } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './contact.css';
import emailjs from "emailjs-com";




function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cjtzdgb', 'template_ftosgpb', form.current, 'B6DRa2dY5HJbk8cmQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            alert('Thank you for reaching out! I will be responding back shortly :) ')
    };

    return (
        <Container className="contact-container" id="contact">
            <Container className="contact-header">
                <h1>Contact Me !</h1>
            </Container>
            <Form ref={form} onSubmit={sendEmail} className="contact-form">
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Your email will never be shared with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control name="message" type="text" placeholder="Message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        </Container>
    )
}

export default Contact;