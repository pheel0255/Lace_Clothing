import React, { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

export default function ContactMe() {
  const [{ firstName, lastName, email, message }, setState] =
    useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_x8c4kz5",
        "template_tc9jhxo",
        e.target,
        "oQaPajsk8I_gVYZ06"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          clearState();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2 className="cont">Contacts</h2>
        <p className="text-lg parag">
          Please fill out the form below to send us an email
          <br />
          and we will get back to you as soon as possible.
        </p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="lastName" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="message"
            id="message"
            value={message}
            onChange={handleChange}
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>

        <div>
          <button
            type="submit"
            className="btn btn-primary contact--form--btn"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </div>
        <h3>
          {" "}
          <b>More Info</b>{" "}
        </h3>
        <div className="info">
          <p>
            Address: <br /> Abuja FCT Nigeria{" "}
          </p>
          <p>Phone: +234 8157050147 </p>
          <p> Email: tobatolu14@gmail.com </p>
          <p>Instagram: "lase__clothing</p>
        </div>
      </form>
    </section>
  );
}
