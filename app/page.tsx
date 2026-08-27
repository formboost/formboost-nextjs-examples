import ClientContactForm from "../components/ClientContactForm";
import ServerActionForm from "../components/ServerActionForm";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 720, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Formboost + Next.js</h1>
      <p>Submit forms to https://formboost.app/f/YOUR_ENDPOINT.</p>
      <ClientContactForm />
      <hr style={{ margin: "40px 0" }} />
      <ServerActionForm />
    </main>
  );
}
