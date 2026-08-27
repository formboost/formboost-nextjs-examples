import { submitContactForm } from "../app/actions";

export default function ServerActionForm() {
  return (
    <section>
      <h2>Server action submission</h2>
      <form action={submitContactForm}>
        <p><input name="name" placeholder="Name" required /></p>
        <p><input name="email" type="email" placeholder="Email" required /></p>
        <p><textarea name="message" placeholder="Message" rows={5} required /></p>
        <input name="_honey" tabIndex={-1} autoComplete="off" hidden />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
