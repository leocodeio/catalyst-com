import { Form, Link } from "@remix-run/react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-[400px] flex flex-col gap-2">
      <Form
        method="post"
        className="h-[320px] p-5 border border-black rounded-lg"
      >
        <section className="flex flex-col mb-5">
          <label htmlFor="email" className="text-black mb-2">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </section>

        <section className="flex flex-col mb-5">
          <label htmlFor="password" className="text-black mb-2">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="current-password"
            id="password"
            name="password"
            placeholder="Password"
            required
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </section>
        <button
          type="submit"
          className="w-full p-2 bg-primary text-black rounded hover:border-2 transition duration-150"
        >
          Login
        </button>
      </Form>
      <Link
        to={"/signup"}
        className="w-[250px] text-center p-2 bg-primary text-black rounded hover:border-2 transition duration-150"
      >
        New? Create here
      </Link>
    </div>
  );
};

export default Login;
