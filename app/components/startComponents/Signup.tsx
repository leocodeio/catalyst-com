import { Form } from "@remix-run/react";
import { useState } from "react";

const Signup = ({ toggle }: { toggle: () => void }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [passStep, setPassStep] = useState(false);

  return (
    <div className="h-[400px] flex flex-col gap-2">
      <Form method="post" className="h-[320px] flex flex-col gap-2">
        {passStep ? (
          <div className="h-full p-5 border border-black rounded-lg">
            <section className="flex flex-col mb-5">
              <label htmlFor="password" className="text-black mb-1">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Your password"
                required
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
            </section>
            <section className="flex flex-col mb-5">
              <label htmlFor="rePassword" className="text-black mb-1">
                Re-enter Password
              </label>
              <input
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                type="password"
                placeholder="Re-enter Password"
                required
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
            </section>
            <button
              type="button"
              onClick={() => {
                setPassStep(false);
              }}
              className="w-full p-2 mb-2 bg-primary text-black rounded hover:border-2 transition duration-150"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full p-2 bg-primary text-black rounded hover:border-2 transition duration-150"
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div className="h-[320px] px-5 py-2 border border-black rounded-lg">
            <section className="flex flex-col mb-2">
              <label htmlFor="name" className="text-black mb-1">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your name"
                required
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
            </section>

            <section className="flex flex-col mb-2">
              <label htmlFor="email" className="text-black mb-1">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your email"
                required
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
            </section>

            <section className="flex flex-col mb-2">
              <label htmlFor="phone" className="text-black mb-1">
                Phone Number
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Phone number"
                required
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
            </section>

            <button
              type="button"
              onClick={() => {
                setPassStep(true);
              }}
              className="w-full p-2 bg-primary text-black rounded hover:border-2 transition duration-150"
            >
              Confirm
            </button>
          </div>
        )}
        <input name="name" value={name} hidden readOnly />
        <input name="email" value={email} hidden readOnly />
        <input name="phone" value={phone} hidden readOnly />
        <input name="password" value={password} hidden readOnly />
        <input name="rePassword" value={rePassword} hidden readOnly />
        <input type="hidden" name="form_type" value="signup" readOnly />
      </Form>

      <button
        onClick={toggle}
        className="w-[250px] p-2 bg-primary text-black rounded hover:border-2 transition duration-150"
      >
        Have an account? Log in here
      </button>
    </div>
  );
};

export default Signup;
