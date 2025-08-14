import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { toast } from "react-toastify";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(
      import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID_1,
      import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID_2
    );

    console.log(formRef.current);
    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID_1,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          emailjs.sendForm(
            import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID_2,
            formRef.current,
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
          );
          console.log(result.text);
          toast.success("✅ Thank you! Your message has been sent.");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      {/* Animated background layers */}
      <div className="contact__bg" aria-hidden="true" />
      <div className="contact__gridlines" aria-hidden="true" />
      <div className="contact__noise" aria-hidden="true" />

      <div className="contact__inner">
        <header className="contact__header">
          <span className="contact__pill">CONTACT</span>
          <h2 className="contact__title">
            Let’s build something <span>exceptional</span>
          </h2>
          <p className="contact__subtitle">
            Tell me about your idea, timeline, and goals — I’ll reply with next
            steps.
          </p>
        </header>

        <div className="contact__content">
          {/* FORM */}
          <form className="contact__form" ref={formRef} onSubmit={sendEmail}>
            <div className="field">
              <input name="name" type="text" placeholder=" " required />
              <label>Your Name</label>
            </div>

            <div className="field">
              <input name="email" type="email" placeholder=" " required />
              <label>Email</label>
            </div>

            <div className="field field--full">
              <input name="subject" type="text" placeholder=" " />
              <label>Subject (optional)</label>
            </div>

            <div className="field field--full">
              <textarea name="message" rows="6" placeholder=" " required />
              <label>Your Message</label>
            </div>

            <button type="submit" className="btn-glow">
              <span>Send Message</span>
            </button>

            {status && <p className="status-message">{status}</p>}
          </form>

          {/* SIDE CARD */}
          <aside className="contact__card" aria-label="Direct contact">
            <div className="contact__card-inner">
              <h3>Direct Contact</h3>
              <ul className="contact__list">
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
                  </svg>
                  <a href="mailto:sad786786786nawaz@gmail.com">
                    asad786786786nawaz@gmail.com
                  </a>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.6 10.8a15.9 15.9 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.3.56 3.6.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 2a1 1 0 0 1 1-1h3.52a1 1 0 0 1 1 1c0 1.3.19 2.5.56 3.6a1 1 0 0 1-.24 1L6.6 10.8Z" />
                  </svg>
                  <a href="tel:+923099377980">+92 3099377980</a>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5Z" />
                  </svg>
                  Lahore, PK
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />
                  </svg>
                  Available for freelance & full-time
                </li>
              </ul>

              <div className="contact__socials" aria-label="Social links">
                <a
                  href="https://github.com/AsadNawaZ77"
                  target="_blank"
                  aria-label="GitHub"
                  className="so"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58V20.9c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.76.08-.75.08-.75 1.22.08 1.86 1.25 1.86 1.25 1.08 1.86 2.83 1.32 3.52 1.01.11-.8.43-1.32.78-1.62-2.66-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.24a11.4 11.4 0 0 1 6 0c2.29-1.56 3.3-1.24 3.3-1.24.66 1.64.24 2.86.12 3.16.77.85 1.24 1.93 1.24 3.25 0 4.63-2.81 5.66-5.49 5.95.44.38.83 1.12.83 2.27v3.37c0 .32.21.69.83.57A12 12 0 0 0 12 .5Z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/asad-nawaz-509747248/"
                  aria-label="LinkedIn"
                  target="_blank"
                  className="so"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M6.94 8.5V21H3.56V8.5h3.38ZM5.25 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM21 21h-3.38v-6.32c0-1.51-.03-3.45-2.1-3.45-2.1 0-2.42 1.64-2.42 3.34V21H9.73V8.5h3.25v1.7h.05c.45-.85 1.55-1.74 3.19-1.74 3.41 0 4.04 2.25 4.04 5.17V21Z" />
                  </svg>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
