import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Mail from "@geist-ui/icons/mail";

const ContactComponent = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4qiyob4", "template_3a31m8r", form.current, {
        publicKey: "ov4yPBAzVjERN3Hl8",
      })
      .then(
        () => {
          console.log("SUCCESS");
          closeModal();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const closeModal = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setMobile("");
    setMessage("");
  };

  return (
    <div
      id="contact_form"
      className="h-screen w-full flex flex-col justify-center items-center bg-base-200"
    >
      <form ref={form} onSubmit={sendEmail} className="w-[82%] lg:w-[30vw]">
        <div className="w-full gap-5 flex flex-col justify-center">
          <h1 className="font-bold text-4xl w-full mb-10 text-center">
            Let's Get in Touch
          </h1>

          {/* Name */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              name="firstname"
              value={firstname}
              type="text"
              className="grow"
              placeholder="First Name"
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
          </label>

          {/* Last Name */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              name="lastname"
              value={lastname}
              type="text"
              className="grow"
              placeholder="Last Name"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
          </label>

          {/* Email */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              name="email"
              value={email}
              type="text"
              className="grow"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>

          {/* Mobile Phone */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="opacity-65"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89c-4.273-4.274-4.836-8.354-4.89-9.795c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899c.901.9 2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535"
                />
              </g>
            </svg>
            <input
              name="mobile"
              value={mobile}
              type="number"
              className="grow"
              placeholder="Phone Number"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </label>

          {/* TextArea */}
          <textarea
            name="message"
            value={message}
            className="textarea textarea-bordered"
            placeholder="Enter Message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <input type="file" className="file-input w-full max-w-xs" />

          {/* if there is a button in form, it will close the modal */}
          <div className="flex justify-end items-center w-full">
            <button type="submit" className="btn btn-primary">
              Send {<Mail size={18} />}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactComponent;
