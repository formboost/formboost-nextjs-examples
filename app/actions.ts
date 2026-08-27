"use server";

const ENDPOINT = "https://formboost.app/f/YOUR_ENDPOINT";

export async function submitContactForm(formData: FormData) {
  const payload = Object.fromEntries(formData.entries());

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Formboost submission failed");
  }
}
