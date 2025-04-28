import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    mesSubject: '',
    message: ''
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: string[] = [];
    if (!formData.senderName) newErrors.push('Name is required.');
    if (!/\S+@\S+\.\S+/.test(formData.senderEmail)) newErrors.push('Invalid email format.');
    if (!formData.mesSubject) newErrors.push('Subject is required.');
    if (formData.message.length < 15) newErrors.push('Message must be at least 15 characters.');

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('/api/saveMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ senderName: '', senderEmail: '', mesSubject: '', message: '' });
        setErrors([]);
      } else {
        setErrors(['Failed to send message.']);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors(['An unexpected error occurred.']);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="senderName"
          placeholder="Your Name"
          value={formData.senderName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="senderEmail"
          placeholder="Your Email"
          value={formData.senderEmail}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="mesSubject"
          placeholder="Subject"
          value={formData.mesSubject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>

      {errors.length > 0 && (
        <div>
          {errors.map((err, idx) => (
            <p key={idx} style={{ color: 'red' }}>{err}</p>
          ))}
        </div>
      )}

      {success && <p style={{ color: 'green' }}>Message sent successfully!</p>}
    </div>
  );
};

export default ContactForm;
