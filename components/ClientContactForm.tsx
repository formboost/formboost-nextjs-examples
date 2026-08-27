"use client";

import { FormEvent, useState } from "react";

const ENDPOINT = "https://formboost.app/f/YOUR_ENDPOINT";

export default function ClientContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section>
      <h2>Client-side submission</h2>
      <form onSubmit={handleSubmit}>
        <p><input name="name" placeholder="Name" required /></p>
        <p><input name="email" type="email" placeholder="Email" required /></p>
        <p><textarea name="message" placeholder="Message" rows={5} required /></p>
        <input name="_honey" tabIndex={-1} autoComplete="off" hidden />
        <button disabled={status === "submitting"} type="submit">
          {status === "submitting" ? "Sending..." : "Send"}
        </button>
      </form>
      {status === "success" && <p>Message sent.</p>}
      {status === "error" && <p>Submission failed.</p>}
    </section>
  );
}
