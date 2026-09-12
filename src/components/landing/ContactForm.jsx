import { useState } from "react";
import { Send, CheckCircle2, User, Mail, Building, FileText } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          <User size={14} style={{ marginRight: 6, verticalAlign: "middle" }} />
          Name
          <input name="name" type="text" placeholder="Your name" required />
        </label>
        <label>
          <Mail size={14} style={{ marginRight: 6, verticalAlign: "middle" }} />
          Email
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
      </div>

      <div className="form-row">
        <label>
          <Building size={14} style={{ marginRight: 6, verticalAlign: "middle" }} />
          Company / Organization
          <input name="company" type="text" placeholder="Company name" required />
        </label>
        <label>
          Project type
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>
              Select project type
            </option>
            <option>Smart City / Civic District</option>
            <option>Corporate Campus / HQ</option>
            <option>Public Park / Botanical Garden</option>
            <option>Eco-Resort / Hotel</option>
            <option>Residential Development</option>
            <option>University / School Campus</option>
          </select>
        </label>
      </div>

      <label>
        <FileText size={14} style={{ marginRight: 6, verticalAlign: "middle" }} />
        Project details
        <textarea
          name="details"
          rows={5}
          placeholder="Tell us about your site, terrain, estimated footprint, and clean energy goals"
          required
          minLength={20}
        />
      </label>

      <button type="submit" className="primary-button submit-button">
        {submitted ? (
          <>
            <CheckCircle2 size={16} style={{ marginRight: 6 }} />
            Inquiry Received
          </>
        ) : (
          <>
            <Send size={16} style={{ marginRight: 6 }} />
            Submit Inquiry
          </>
        )}
      </button>
      {submitted && (
        <p className="form-success" role="status">
          <CheckCircle2 size={16} style={{ marginRight: 6, verticalAlign: "middle" }} />
          Thanks - our engineering team will review your project details and get back to you shortly.
        </p>
      )}
    </form>
  );
}
