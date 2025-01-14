import { MoveLeft } from "lucide-react";
import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import the emailjs package

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // TypeScript fix for event typing
  const handleMouseOver = (e: React.MouseEvent<HTMLInputElement>) => {
    (e.target as HTMLInputElement).style.backgroundColor = "#777777";
    (e.target as HTMLInputElement).style.border = "#777777";
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLInputElement>) => {
    (e.target as HTMLInputElement).style.backgroundColor = "black";
    (e.target as HTMLInputElement).style.color = "white";
  };

  // Handle form submission and send email
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the page from refreshing on form submission

    // Prepare the message object to send to EmailJS
    const templateParams = {
      name,
      email,
      message,
    };

    // Send email using EmailJS
    emailjs
      .send("service_kwv7bzg", "template_3nvivbt", templateParams, "afnan")
      .then(
        (response) => {
          alert("Message sent successfully!");
          console.log("SUCCESS", response);
        },
        (error) => {
          alert("Failed to send the message. Please try again later.");
          console.log("ERROR", error);
        }
      );

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main className="contact-container">

      <h1 style={{ fontWeight: 'bold', fontSize: '36px' }}>Contact</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="field-label">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="field-label">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="field-label">Message</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Submit"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </form>

    </main>

  );
}

export default Contact;
