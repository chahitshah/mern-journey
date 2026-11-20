import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth.js";

export default function Register() {
  const { handleRegister } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    contact: "",
    password: "",
    isSeller: false,
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submitRegistration(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await handleRegister(form);
      navigate("/login", { state: { registered: true } });
    } catch (requestError) {
      const responseData = requestError.response?.data;
      setError(
        responseData?.errors?.[0]?.msg ??
          responseData?.message ??
          "We couldn't create your account. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="register-title">
        <Link className="brand" to="/" aria-label="Snitch home">
          <span className="brand-mark" aria-hidden="true">s</span>
          <span>snitch</span>
        </Link>

        <div className="auth-heading">
          <p className="eyebrow">A better way to shop</p>
          <h1 id="register-title">Create your account</h1>
          <p className="auth-description">
            Join Snitch and find your next favorite thing.
          </p>
        </div>

        <form className="auth-form" onSubmit={submitRegistration}>
          <label className="field">
            <span>Full name</span>
            <input
              autoComplete="name"
              name="fullname"
              onChange={updateField}
              placeholder="Your name"
              required
              value={form.fullname}
            />
          </label>

          <label className="field">
            <span>Email address</span>
            <input
              autoComplete="email"
              name="email"
              onChange={updateField}
              placeholder="you@example.com"
              required
              type="email"
              value={form.email}
            />
          </label>

          <label className="field">
            <span>Contact number</span>
            <input
              autoComplete="tel"
              name="contact"
              onChange={updateField}
              placeholder="Your phone number"
              required
              type="tel"
              value={form.contact}
            />
          </label>

          <label className="field">
            <span>Password</span>
            <input
              autoComplete="new-password"
              minLength={6}
              name="password"
              onChange={updateField}
              placeholder="At least 6 characters"
              required
              type="password"
              value={form.password}
            />
          </label>

          <fieldset className="account-type">
            <legend>I want to</legend>
            <label className={`choice${!form.isSeller ? " choice-selected" : ""}`}>
              <input
                checked={!form.isSeller}
                name="accountType"
                onChange={() => setForm((current) => ({ ...current, isSeller: false }))}
                type="radio"
              />
              <span>Shop</span>
            </label>
            <label className={`choice${form.isSeller ? " choice-selected" : ""}`}>
              <input
                checked={form.isSeller}
                name="accountType"
                onChange={() => setForm((current) => ({ ...current, isSeller: true }))}
                type="radio"
              />
              <span>Sell</span>
            </label>
          </fieldset>

          {error && <p className="form-message form-error" role="alert">{error}</p>}

          <button className="submit-button" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Creating account…" : "Create account"}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </section>
    </main>
  );
}
