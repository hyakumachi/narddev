import React from "react";
import "./Contact.css";

const Contact = () => {
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "98242237-a847-4470-841b-b940aa88ff38");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="container">
      <div className="contact">
        <div className="title">Contact Me</div>
        <form autoComplete="off" onSubmit={onSubmit}>
          <div className="input-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="name-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="email-input"
            />
          </div>
          <textarea name="message" placeholder="Message" required></textarea>
          <div className="btn-wrapper">
            <button type="submit">Submit Form</button>
          </div>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
