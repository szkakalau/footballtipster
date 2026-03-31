"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

type SubscribeFormProps = {
  variant?: "default" | "hero";
  /** Unique id for the email input when multiple forms exist on one page */
  inputId?: string;
};

export default function SubscribeForm({
  variant = "default",
  inputId,
}: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [hp, setHp] = useState("");
  const [startedAt] = useState(() => Date.now());

  const resolvedInputId =
    inputId ?? (variant === "hero" ? "hero-email" : "free-email");

  const canSubmit = useMemo(() => {
    if (status === "loading") return false;
    if (!email.trim()) return false;
    if (!isValidEmail(email)) return false;
    return true;
  }, [email, status]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (hp.trim()) {
      setStatus("success");
      setMessage("Check your inbox.");
      return;
    }

    // Cheap bot friction: require the form to exist briefly.
    if (Date.now() - startedAt < 900) {
      setStatus("error");
      setMessage("Please try again.");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    setStatus("loading");
    setMessage(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok: true; message?: string }
        | { ok: false; message?: string }
        | null;

      if (!res.ok || !data || data.ok === false) {
        setStatus("error");
        setMessage(data?.message || "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message || "Check your inbox to confirm.");
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <div className={variant === "hero" ? "subscribeWrap subscribeWrapHero" : "subscribeWrap"}>
      <form
        className={variant === "hero" ? "form formHero" : "form"}
        onSubmit={onSubmit}
      >
        <div style={{ position: "absolute", left: -9999, top: "auto" }} aria-hidden="true">
          <label>
            Company
            <input
              name="company"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <input
          id={resolvedInputId}
          className="input"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
        />
        <button className="btn btnPrimary" type="submit" disabled={!canSubmit}>
          <span className="btnIcon" aria-hidden="true" />
          <span>{status === "loading" ? "Sending..." : "Get Free Picks"}</span>
        </button>
      </form>

      {message ? <div className="status">{message}</div> : null}
    </div>
  );
}

