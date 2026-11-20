import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hook/useAuth.js";

export default function Login() {
  const { handleLogin } = useAuth();
  const location = useLocation();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  async function submitLogin(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const trimmedIdentifier = identifier.trim();
    const credentials = trimmedIdentifier.includes("@")
      ? { email: trimmedIdentifier, contact: "", password }
      : { email: "", contact: trimmedIdentifier, password };

    try {
      await handleLogin(credentials);
      setIsSignedIn(true);
    } catch (requestError) {
      const responseData = requestError.response?.data;
      setError(
        responseData?.errors?.[0]?.msg ??
          responseData?.message ??
          "We couldn't sign you in. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card login-card" aria-labelledby="login-title">
        <Link className="brand" to="/" aria-label="Snitch home">
          <span className="brand-mark" aria-hidden="true">s</span>
          <span>snitch</span>
        </Link>

        <div className="auth-heading">
          <p className="eyebrow">Good to have you back</p>
          <h1 id="login-title">Welcome back</h1>
          <p className="auth-description">Sign in to pick up where you left off.</p>
        </div>

        {location.state?.registered && (
          <p className="form-message form-success" role="status">
            Your account is ready. Sign in to continue.
          </p>
        )}

        <form className="auth-form" onSubmit={submitLogin}>
          <label className="field">
            <span>Email or contact number</span>
            <input
              autoComplete="username"
              onChange={(event) => setIdentifier(event.target.value)}
              placeholder="you@example.com or phone number"
              required
              type="text"
              value={identifier}
            />
          </label>

          <label className="field">
            <span>Password</span>
            <input
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Your password"
              required
              type="password"
              value={password}
            />
          </label>

          {error && <p className="form-message form-error" role="alert">{error}</p>}
          {isSignedIn && (
            <p className="form-message form-success" role="status">
              You’re signed in.
            </p>
          )}

          <button className="submit-button" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Signing in…" : isSignedIn ? "Signed in" : "Sign in"}
          </button>
        </form>

        <p className="auth-switch">
          New to Snitch? <Link to="/register">Create an account</Link>
        </p>
      </section>
    </main>
  );
}
