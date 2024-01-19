import { ContactForm } from "@/ContactForm";

export default function ContactPage() {
  let name = undefined;

  if (true) {
    name = "Tim";
  }

  return (
    <div className="">
      <h1 className="font-sans font-black text-3xl mb-5">Contact Page</h1>

      <div className="text-neutral-950">
        Hello, {name ?? "[Error: no name found]"}! You are on the contact page.
        This is a great place to send me a message.
      </div>

      <div className="mt-5">
        <ContactForm name={name}></ContactForm>
      </div>
    </div>
  );
}
