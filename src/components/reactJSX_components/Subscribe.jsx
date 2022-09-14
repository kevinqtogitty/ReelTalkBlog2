import React from 'react';
import '../../stylesheets/subscribeStyle.css';

export default function Subscribe() {
  const email = import.meta.env.EMAIL;

  return (
    <section className="subscribeBanner">
      <div className="bannerText">Subscribe to our newsletter!</div>
      <form
        className="form"
        action={`https://formsubmit.co/${email}`}
        method="POST"
      >
        <input
          className="input"
          placeholder="First Name"
          type="text"
          name="first_name"
        />
        <input
          className="input"
          placeholder="Last Name"
          type="text"
          name="last_name"
        />
        <input
          className="input"
          placeholder="Email Address"
          type="text"
          name="email"
        />
        <input type="hidden" name="_subject" value="New submission!" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thanks for Subscribing to our Newsletter!"
        />
        <input type="hidden" name="_template" value="table" />

        <button className="submitButton" type="submit">
          Subscribe
        </button>
      </form>
    </section>
  );
}
