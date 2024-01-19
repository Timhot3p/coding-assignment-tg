"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

const submit = ({ name }) => {
  alert("Thanks for your message, " + name + "! I'll get back to you soon.");
};

export const ContactForm = ({ name }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit({ name });
      }}
    >
      <div style={{ margin: 20 }}>
        <Input
          label="Name (it's okay if you don't want to tell me, I should already know at this point)"
          name="name"
          defaultValue={name ?? ""}
          isDisabled={true}
          color="primary"
        />
      </div>
      <div style={{ margin: 20 }}>
        <Input label="Your favorite color" name="color" color="primary" />
      </div>
      <div style={{ margin: 20 }}>
        <Input
          label="Is there something else you want to tell me?"
          name="secret"
          color="primary"
        />
      </div>
      {/*<div>
        {/*<p>
          TODO: We should add a submit button here. It should be a primary
          button with the text &quot;Send Message&quot;.
        </p>
        <p>
          I really like the{" "}
          <a href="https://nextui.org/" target="_blank">
            NextUI
          </a>
          Button. Maybe we should add one of these after installing the NextUI
          button package via npm.
        </p>
        <p>
          And, I guess we should add some spacing between the input fields and
          also between the inputs and the button.
        </p>*
      </div>*/}
      {/* This would be a great place for a submit button */}
      <div
        style={{
          margin: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button color="primary">Send Message</Button>
      </div>
    </form>
  );
};
