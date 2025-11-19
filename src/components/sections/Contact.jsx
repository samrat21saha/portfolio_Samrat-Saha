import { useState } from "react";
import { contactContent } from "../../data/content";
import { SectionWrapper } from "../layout/SectionWrapper";

const INITIAL_FORM = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const validateForm = (values) => {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please share your name.";
  if (!values.email.trim())
    errors.email = "Email helps me send a considered reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Add a valid email address.";
  if (!values.message.trim()) errors.message = "Tell me about the challenge.";
  return errors;
};

export const Contact = () => {
  const [formValues, setFormValues] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) return;

    setStatus("success");
    // Placeholder: Plug in EmailJS, Resend, or a serverless function here.
    console.info("Contact submission placeholder:", formValues);
    setFormValues(INITIAL_FORM);
  };

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Contact"
      title="Let's build something ambitious."
      description="Form validation runs client-side; wire it up to EmailJS, Formspree, or your preferred inbox in minutes."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="glass-panel flex flex-col gap-4 rounded-3xl p-6"
          noValidate
        >
          <FormField
            label="Full Name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            error={errors.name}
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            error={errors.email}
          />
          <FormField
            label="Company / Project"
            name="company"
            value={formValues.company}
            onChange={handleChange}
          />
          <FormField
            label="Project Details"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            error={errors.message}
            multiline
          />
          <button
            type="submit"
            className="mt-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[var(--accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            Send Message
          </button>
          {status === "success" && (
            <p className="text-sm text-green-400">
              Thanks! I'll reply within 1-2 business days.
            </p>
          )}
        </form>

        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              Availability
            </p>
            <p className="mt-2 text-base text-white">{contactContent.availability}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              Location
            </p>
            <p className="mt-2 text-base text-white">{contactContent.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              Email
            </p>
            <a
              className="mt-2 block text-base text-white hover:text-[var(--accent)]"
              href={`mailto:${contactContent.email}`}
            >
              {contactContent.email}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              Social
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-white/80">
              {contactContent.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-3 py-1 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const FormField = ({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  multiline = false,
}) => (
  <label className="text-sm text-white/80">
    <span className="mb-1 block font-semibold">{label}</span>
    {multiline ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={5}
        className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-base text-white placeholder-white/40 focus:border-[var(--accent)] focus:outline-none"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-base text-white placeholder-white/40 focus:border-[var(--accent)] focus:outline-none"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
    )}
    {error && (
      <span id={`${name}-error`} className="mt-1 block text-sm text-red-400">
        {error}
      </span>
    )}
  </label>
);

