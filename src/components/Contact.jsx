import React, { useState } from "react";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const recipientEmail = "thangapandi.chella@gmail.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subjectText = formData.subject.trim() 
      ? `[Portfolio Contact] ${formData.subject}` 
      : `Message from ${formData.name || "Portfolio Visitor"}`;

    const bodyText = `Hi Thangapandi,\n\n${formData.message}\n\n---\nFrom: ${formData.name || "Anonymous"}\nEmail: ${formData.email || "Not specified"}`;

    // Build standard mailto link so it natively opens the user's default email client
    // (Apple Mail, Outlook, Thunderbird, default system mail app, or default webmail)
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subjectText
    )}&body=${encodeURIComponent(bodyText)}`;

    // Trigger user's default mail client directly
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="contact-card">
      <div className="contact-header">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-subtitle">
          Want to reach out or discuss tech? Drop a message below to open in your mail client.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alex Smith"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="alex@example.com"
              required
              className="form-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Collaboration / Technical discussion..."
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me a bit about what you're working on..."
            required
            className="form-textarea"
          ></textarea>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn" id="contact-submit-btn">
            <AiOutlineSend />
            <span>Send Message</span>
          </button>

          <span className="form-hint">
            {submitted ? (
              <span style={{ color: "var(--accent-sage)", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <AiOutlineCheckCircle /> Mail composer opened!
              </span>
            ) : (
              "Opens your default email client pre-addressed"
            )}
          </span>
        </div>
      </form>
    </section>
  );
};

export default Contact;
