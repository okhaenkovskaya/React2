import { useState, useRef } from "react";

import { Input, Textarea, Form, Button } from "../Form";

type PropsData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [data, setData] = useState<PropsData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(data, "data");
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Form innerRef={formRef} submitFunction={handleSubmit}>
      <h1>Contact Form</h1>
      <Input
        isRequired
        type="text"
        name="firstName"
        value={data.firstName}
        changeFunction={handleChange}
        placeholder="First Name"
      />
      <Input
        isRequired
        type="text"
        name="lastName"
        value={data.lastName}
        changeFunction={handleChange}
        placeholder="Last Name"
      />
      <Input
        isRequired
        type="email"
        name="email"
        value={data.email}
        changeFunction={handleChange}
        placeholder="Email"
      />
      <Textarea
        changeFunction={handleChange}
        name="message"
        placeholder="Message"
        value={data.message}
      />

      <Button innerRef={buttonRef}>Send</Button>
    </Form>
  );
};

export default ContactForm;
